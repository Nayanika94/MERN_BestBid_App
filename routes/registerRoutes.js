const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
  "/",
  [
    check("email", "email is required").not().isEmpty().isEmail(),
    check("username", "username is require ").not().isEmpty(),
    check("password", "password should be 6 or more character").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const salt = await bcrypt.genSalt(10);
      let newPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: newPassword,
      });

      const payload = {
        user: {
          id: newUser.id,
          name: newUser.name,
          profileImage: newUser.profileImage,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server error");
    }
  }
);

module.exports = router;