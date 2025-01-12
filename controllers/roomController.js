const Room = require('../models/Room');

class RoomController {
    showHome(req, res) {
        const rooms = Room.getAllRooms();
        res.render('home', { rooms });
    }

    showAdmin(req, res) {
        const rooms = Room.getAllRooms();
        res.render('admin', { rooms });
    }

    addRoom(req, res) {
        Room.addRoom(req.body);
        res.redirect('/admin');
    }

    showBookingForm(req, res) {
        const room = Room.getRoomById(req.params.id);
        if (!room) {
            return res.status(404).send('Room not found');
        }
        res.render('booking', { room });
    }
}

module.exports = new RoomController();