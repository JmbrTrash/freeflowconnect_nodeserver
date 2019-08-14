const events = require('./events.js')
const config = require('./../config')
const RoomList = require('./../room.js')
// Socket namespace
let namespace;

// When connecting
const onConnection = (socket) => {

    console.log(`Socket connected to port ${config.PORT}`)

    let userRoom

    // Listening for joining a room
    socket.on('joinRoom', (data) => {
        console.log(` `)
        console.log(`joinRoom`)
        const room = data.room;
        const user = data.user;
        userRoom = room;
        console.log(`user ${user} wants to join the room ${room}`);
        socket.join(room, () => {
            console.log(`user ${user} joined the room ${room}`);
            RoomList.joinRoom(room, user)
            namespace.in(room).emit('userJoined', { user });

        });
        console.log(` `)

    });

    // Listening for new public messages
    socket.on('publicMessage', events.publicMessage(namespace))

    // Leave room
    socket.on('leaveRoom', events.leaveRoom(socket, namespace))

    // Leave room
    // socket.on('leaveChat', events.leaveChat(socket, namespace))

    // Listening for private chats
    // socket.on('joinPrivateRoom', events.joinPrivateRoom(socket, namespace));

    // Leave private chat
    // socket.on('leavePrivateRoom', events.leavePrivateRoom(socket, namespace))

    // Private message listener
    // socket.on('privateMessage', events.privateMessage(namespace))

    // Private message for Signaling PeerConnection
    // socket.on('privateMessagePCSignaling', events.privateMessagePCSignaling(namespace))

    // Set status
    // socket.on('changeStatus', events.changeStatus(socket, namespace))

    // Disconnect
    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
        // ChatRedis.getUser(userRoom, socket.id).then( user => {
        //     if(user !== null){
        //         events.leaveChat(socket, namespace)({
        //             room: userRoom,
        //             username: user.username
        //         })
        //         return user
        //     }
        // }).then( user => {
        //     ChatRedis.delUser(user.username, config.KEY)
        // })
    })

    // Start a video
    // socket.on('startVideo')

}

exports.createNameSpace = (io) => {
    namespace = io
        .of(config.ROOMS_NAMESPACE)
        .on('connection', onConnection)
}