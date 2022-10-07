const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
require("dotenv").config();


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middlewares/authMiddleware");
const Event = require("../models/Event");

//route Get api/event
//desc Get all event
//access public
router.get("/", async (req, res) => {
  try {
    const event = await Event.find({});
    res.send(event);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

//route Get api/event/:id
//desc Get event by id
//access public
router.get("/id", async (req, res) => {
  try {
    const event = await Todo.findById(req.params.id);
    if (!event) {
      return res.status(404).send("feedback not found");
    }
    res.send(event);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

//route Post api/event
//desc Insert event
//access public
router.post(
  "/",
  [
    check("date", "Date is required").not().isEmpty(),
    check("month", "month is required").not().isEmpty(),
    check("eventName", "Event Name is required").not().isEmpty(),
    check("eventDetails", "Event Details is required").not().isEmpty(),

  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newEvent = await Event.create({
        date: req.body.date,
        month: req.body.month,
        eventName: req.body.eventName,
        eventDetails: req.body.eventDetails,

      });

      res.send({ newEvent });
    } catch (err) {
      console.log(err)
      return res.status(500).send("Server error");
    }
  }
);


//delete

router.delete('/', (req, res) => {


  const event = Event.find((c) => c.id == req.body.id);
  if (!event) {
    return res.status(400).json({ error: 'car not found' });
  }//deleting a car

  Events = Event.filter((c) => c.id !== event.id);
  res.send(Events);
});


//route Post api/event
//desc Update event
//access public
router.put(
  "/",
  [
    check("date", "Date is required").not().isEmpty(),
    check("month", "month is required").not().isEmpty(),
    check("eventName", "Event Name is required").not().isEmpty(),
    check("eventDetails", "Event Details is required").not().isEmpty(),

  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const event = await Event.findById(req.body.id);
      if (!event) {
        return res.status(404).send("feedback not found");
      }


      (event.date = req.body.date),
        (event.month = req.body.month),
        (event.eventName = req.body.eventName),
        (event.eventDetails = req.body.eventDetails),
        await event.save();
      res.send(event);
    } catch (err) {
      return res.status(500).send("Server error");
    }
  }
);


module.exports = router;