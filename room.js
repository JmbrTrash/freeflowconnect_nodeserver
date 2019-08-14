var RoomList;

RoomList = (function () {
    RoomList.prototype.test = "";
    RoomList.prototype.rooms = { 'GENERAL': { users: [] }, 'THREEFOLD': { users: [] }, 'JIMBER': { users: [] } };

    function RoomList(){}

    RoomList.prototype.addRoom = function(name) {
        console.log("adding room")
        if (this.rooms[name] == null) {
            this.rooms[name] = { users: [] }
        }
    };
    RoomList.prototype.joinRoom = function(roomName, userName) {
        if (this.rooms[roomName] == null) {
            this.addRoom(roomName)
        }
        this.rooms[roomName].users.push(userName)
    }
    RoomList.prototype.leaveRoom = function(roomName, username) {
       
        this.rooms[roomName].users.pop()
        // delete this.rooms[roomName].users[username]
    }

    RoomList.prototype.getRoom = function (name) {
        return this.rooms[name]
    }
    RoomList.prototype.getRooms = function() {
        return this.rooms
    }
    return RoomList;
})();

module.exports = new RoomList()