// models/Booking.js
class Booking {
    constructor() {
        this.bookings = [];
    }

    createBooking(bookingData) {
        const newBooking = {
            id: this.bookings.length + 1,
            ...bookingData,
            createdAt: new Date()
        };
        this.bookings.push(newBooking);
        return newBooking;
    }

    getBookingById(id) {
        return this.bookings.find(booking => booking.id === parseInt(id));
    }
}

module.exports = new Booking();
