const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/confirm', bookingController.createBooking);

module.exports = router;