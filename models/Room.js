// models/Room.js
class Room {
    constructor() {
        this.rooms = [
            { id: 1, number: '101', type: 'Deluxe', price: 100, isAvailable: true },
            { id: 2, number: '102', type: 'Suite', price: 200, isAvailable: true }
        ];
    }

    getAllRooms() {
        return this.rooms;
    }

    getAvailableRooms() {
        return this.rooms.filter(room => room.isAvailable);
    }

    getRoomById(id) {
        return this.rooms.find(room => room.id === parseInt(id));
    }

    addRoom(roomData) {
        const newRoom = {
            id: this.rooms.length + 1,
            number: roomData.number,
            type: roomData.type,
            price: parseInt(roomData.price),
            isAvailable: true
        };
        this.rooms.push(newRoom);
        return newRoom;
    }

    updateRoomAvailability(id, isAvailable) {
        const room = this.getRoomById(id);
        if (room) {
            room.isAvailable = isAvailable;
            return true;
        }
        return false;
    }
}

module.exports = new Room();