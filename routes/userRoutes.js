//--------------------Import---------------

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let User = require("../models/User");

//route Post api/user
//desc Insert user
//access public
router.post(
  "/",
  [
    check("email", "Please enter valid email").notEmpty().isEmail(),
    check("username", "Username is required").notEmpty(),
    check("password", "Password need to be 4 char or more").isLength({
      min: 4,
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
        username: req.body.username,
        email: req.body.email,
        password: newPassword,
      });

      const payload = {
        user: {
          id: newUser.id,
          username: newUser.username,
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
      return res.status(500).send(err);
    }
  }
);

//route Post api/user
//desc Update user
//access public
router.put("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.date = req.body.date;
    user.address = req.body.address;
    user.phone = req.body.phone;
    await user.save();
    res.send(user);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

//route Post api/user/uploadPicture
//desc Update user profile picture
//access public
router.post("/uploadPicture", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    const file = req.files.myFile;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    const path = "public/uploads/" + file.name;
    file.mv(path, function (err) {
      if (err) return res.status(500).send(err);
    });
    user.photo = file.name;
    await user.save();
    res.send(user);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

//----------------Export-------------------
module.exports = router;