const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route    GET  api/contacts
// @desc     GEt all users contacts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST  api/contacts
// @desc     Add new contact
// @access   Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    PUT  api/contacts
// @desc     Update contact
// @access   Private
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndUpdate(id, req.body);
    res.json(req.body);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route    DELETE  api/contacts
// @desc     Delete contact
// @access   Private
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete({ _id: id });
    res.send('Delete Contact');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
