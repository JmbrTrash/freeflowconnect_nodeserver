const express = require('express');
const roomsRouter = express.Router();
const RoomList = require('../room.js')

// route for get rooms
roomsRouter.get('/', (req,res) => {
    const rooms = RoomList.getRooms();
    console.log(" ")
    console.log("/rooms", rooms)
    console.log(" ")
    res.json(rooms)
})

roomsRouter.get('/:name', (req,res) => {
    const room = RoomList.getRoom(req.params.name);
    console.log(" ")
    console.log(`/rooms/${req.params.name}`, room)
    console.log(" ")
    res.send(room)
})
module.exports = roomsRouter