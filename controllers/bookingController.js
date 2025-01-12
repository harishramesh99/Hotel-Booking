// controllers/bookingController.js
const Room = require('../models/Room');
const Booking = require('../models/Booking');

class BookingController {
    createBooking(req, res) {
        const room = Room.getRoomById(req.body.roomId);
        if (!room) {
            return res.status(404).send('Room not found');
        }

        const booking = Booking.createBooking({
            roomId: parseInt(req.body.roomId),
            name: req.body.name,
            email: req.body.email,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut
        });

        Room.updateRoomAvailability(booking.roomId, false);
        res.render('confirmation', { booking });
    }
}

module.exports = new BookingController();