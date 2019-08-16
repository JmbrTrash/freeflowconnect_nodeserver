import RoomListClass from '../../database/room'

let roomList = new RoomListClass()

function events(sio) {
    let userRoom
    let userName

    sio.on('connection', () => {
        console.log("socket.io connection")
    })
    
    sio.on('joinRoom', (data) => {
        console.log(` `)
        console.log(`joinRoom`)
    
        const room = data.room
        const user = data.user
    
        userRoom = room
        userName = user
    
        console.log(userRoom, userName)
        console.log(`user ${user} wants to join the room ${room}`)
    
        sio.join(room, () => {
            console.log(`user ${user} joined the room ${room}`)
            roomList.joinRoom(room, user)
            this.in(room).emit('userJoined', { user })
        })
    
        console.log(` `)
    })
    
    sio.on('publicMessage', ({ room, message, username }) => {
        this.in(room).emit('newMessage', {
            message,
            username
        });
    })
    
    sio.on('leaveRoom', ({room, user}) => {
        console.log(`user ${user} wants to leave the room ${room}`)
    
        sio.leave(room, () => {
            console.log(`user ${user} left the room ${room}`)
    
            roomList.leaveRoom(room, user)
            this.in(room).emit('userLeft', { user })
        })
    })
    
    sio.on('disconnect', function () {
        console.log(userName, userRoom)
    
        if (userRoom != undefined && userName != undefined) {
            sio.leave(userRoom, () => {
                console.log(`user ${userName} left the room ${userRoom}`)
    
                roomList.leaveRoom(userRoom, userName)
                this.in(userRoom).emit('userLeft', { userName });
            })
        }
    })
}

export default events