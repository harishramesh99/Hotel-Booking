// routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/', roomController.showHome);
router.get('/admin', roomController.showAdmin);
router.post('/admin/add-room', roomController.addRoom);
router.get('/book/:id', roomController.showBookingForm);

module.exports = router;
