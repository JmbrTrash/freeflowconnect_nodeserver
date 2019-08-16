import RoomListClass from '../../database/room'

var RoomList = new RoomListClass()

function routes(app) {
    app.get('/rooms', (req, res) => {
        const rooms = RoomList.getRooms()
        console.log(" ")
        console.log("/rooms", rooms)
        console.log(" ")
        res.json(rooms)
    })

    app.get('/rooms/:name', (req, res) => {
        const room = RoomList.getRoom(req.params.name)
        console.log(" ")
        console.log(`/rooms/${req.params.name}`, room)
        console.log(" ")
        res.send(room)
    })
}

export default routes