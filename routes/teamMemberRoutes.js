//--------------Import-------------
const express = require('express');
let TeamMember = require('../models/TeamMember');
const { check, validationResult } = require("express-validator");


//--------------Use router function Using router Constant----------------
const router = express.Router();


//-------------Get all faq from mongoDB using http get method-------------
router.get('/', async (req, res) => {
  try {
    const teamDB = await TeamMember.find();
    res.send(teamDB);
  } catch (err) {
    return res.status(500).send('Server Error')
  }
});


//-------------Insert FAQ in mongoDB using http post method-----------
router.post('/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty()
  ], async (req, res) => {

    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const newTeamMember = await TeamMember.create({
        name: req.body.name,
        description: req.body.description
      })
      res.send(newTeamMember);
    } catch (err) {
      return res.status(500).send('Server Error')
    }

  })

//-----------Export-------------
module.exports = router;