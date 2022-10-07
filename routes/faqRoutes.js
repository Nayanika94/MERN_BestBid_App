//--------------Import-------------
const express = require('express');
let Faq = require('../models/FAQ');
const { check, validationResult } = require("express-validator");


//--------------Use router function Using router Constant----------------
const router = express.Router();


//-------------Get all faq from mongoDB using http get method-------------
router.get('/', async (req, res) => {
  try {
    const faqDB = await Faq.find();
    res.send(faqDB);
  } catch (err) {
    return res.status(500).send('Server Error')
  }
});


//-------------Insert FAQ in mongoDB using http post method-----------
router.post('/',
  [
    check('question', 'question is required').not().isEmpty(),
    check('answer', 'answer is required').not().isEmpty()
  ], async (req, res) => {

    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const newFaq = await Faq.create({
        question: req.body.question,
        answer: req.body.answer
      })
      res.send(newFaq);
    } catch (err) {
      return res.status(500).send('Server Error')
    }

  })

//-----------Export-------------
module.exports = router;