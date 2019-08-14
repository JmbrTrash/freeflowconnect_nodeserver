
const RoomList = require('./../room.js')

const leaveRoom = (socket, namespace) => ({ room, user }) => {
    console.log(`user ${user} wants to leave the room ${room}`);

    socket.leave(room, () => {
        console.log(`user ${user} left the room ${room}`);

        RoomList.leaveRoom(room, user)
        namespace.in(room).emit('userLeft', { user });
    })
}

const publicMessage = (namespace) => ({ room, message, username }) => {
    namespace.in(room).emit('newMessage', {
        message,
        username
    });
}
const disconnect = (socket, namespace, userName, userRoom) => () => {
    console.log(`Socket ${socket.id} disconnected`);
    console.log(userName)
    socket.leave(userRoom, () => {
        console.log(`user ${userName} left the room ${userRoom}`);

        RoomList.leaveRoom(userRoom, userName)
        namespace.in(userRoom).emit('userLeft', { userName });
    })
}

// const leaveChat = (socket, namespace) => ({ room, username }) => {
//     console.log(`user ${username} wants to leave the chat`);

//     ChatRedis.delUser(room, socket.id)
//         .then(data => {
//             if (data === null) return null
//             return ChatRedis.getUsers(room);
//         })
//         .then(users => {
//             if (users === null) return

//             // Notify all the users in the same room
//             namespace.in(room).emit('leaveChat', { users, username });

//             // Leave the socket
//             socket.leave(room, () => {
//                 console.log(`user ${username} left the room ${room}`);
//             }
//         })
// }


// const joinPrivateRoom = (socket, namespace) => ({ username, room, to }) => {
//     console.log(`user ${username} wants to have a private chat with ${to}`);

//     // Join the room
//     socket.join(to, () => {

//         if (room !== null) {

//             ChatRedis.getUser(room, socket.id)
//                 .then(user => {

//                     if (user === null) return null

//                     // If he is already talking
//                     if (user.privateChat) {

//                         namespace.to(to).emit('leavePrivateRoom', {
//                             to,
//                             privateMessage: `${to} is already talking`,
//                             from: username,
//                             room
//                         })

//                         socket.leave(to, () => {
//                             console.log(`user ${username} force to left the room ${to}`);
//                         })

//                         return null;
//                     }

//                     return ChatRedis.setUser(room, socket.id, {
//                         ...user,
//                         privateChat: true
//                     })
//                 })
//                 .then(res => {
//                     if (res === null) return

//                     // Notify the user to talk with (in the same main room)
//                     namespace.in(room).emit('privateChat', {
//                         username,
//                         to
//                     });

//                 })
//         }
//     });
// }

// const leavePrivateRoom = (socket, namespace) => ({ room, from, to }) => {
//     console.log(`user ${from} wants to leave the private chat with ${to}`);

//     ChatRedis.getUser(room, socket.id)
//         .then(user => {
//             if (user === null) return

//             return ChatRedis.setUser(room, socket.id, {
//                 ...user,
//                 privateChat: false
//             })
//         })
//         .then(res => {
//             if (res === null) return

//             namespace.to(to).emit('leavePrivateRoom', {
//                 to,
//                 privateMessage: `${to} has closed the chat`,
//                 from
//             })

//             socket.leave(to, () => {
//                 console.log(`user ${from} left the private chat with ${to}`);
//             })

//         })
// }


module.exports = {
    leaveRoom,
    publicMessage,
    disconnect
}