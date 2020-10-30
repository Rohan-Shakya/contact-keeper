const express = require('express');
const router = express.Router();

// @route    GET  api/contacts
// @desc     GEt all users contacts
// @access   Private
router.get('/', (req, res) => {
  res.send('Get all contact');
});

// @route    POST  api/contacts
// @desc     Add new contact
// @access   Private
router.post('/', (req, res) => {
  res.send('All contact');
});

// @route    PUT  api/contacts
// @desc     Update contact
// @access   Private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @route    DELETE  api/contacts
// @desc     Delete contact
// @access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;
