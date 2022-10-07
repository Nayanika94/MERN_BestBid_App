
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
require("dotenv").config();


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middlewares/authMiddleware");
const UserFeedback = require("../models/UserFeedback");

//route Get api/userFeedback
//desc Get all userFeedback
//access public
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userFb = await UserFeedback.find({});
    res.send(userFb);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

//route Get api/userFeedback/:id
//desc Get userFeedback by id
//access public
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const userFb = await Todo.findById(req.params.id);
    if (!userFb) {
      return res.status(404).send("feedback not found");
    }
    res.send(userFb);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

//route Post api/userFeedback
//desc Insert userFeedback
//access public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("lastname", "Last Name is required").not().isEmpty(),
    check("email", "Email is required").not().notEmpty(),
    check("feedback", "Please provide your review").not().notEmpty(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newFeedback = await UserFeedback.create({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        feedback: req.body.feedback,
      });

      res.send({ newFeedback });
    } catch (err) {
      console.log(err)
      return res.status(500).send("Server error");
    }
  }
);

//route Post api/userFeedback
//desc Update userFeedback
//access public
router.put(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("lastname", "Last Name is required").not().isEmpty(),
    check("email", "Email is required").not().notEmpty(),
    check("feedback", "Please provide your review").not().notEmpty(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userFb = await UserFeedback.findById(req.body.id);
      if (!userFb) {
        return res.status(404).send("feedback not found");
      }

      (userFb.name = req.body.name),
        (userFb.lastname = req.body.lastname),
        (userFb.email = req.body.email),
        (userFb.feedback = req.body.feedback),
        await userFb.save();
      res.send(userFb);
    } catch (err) {
      return res.status(500).send("Server error");
    }
  }
);


module.exports = router;