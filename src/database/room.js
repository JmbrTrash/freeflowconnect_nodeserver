let instance = null;

class RoomList {
    constructor() {
        if(instance ===  null) {
            console.log("Setting instance ...")
            this.rooms = { 'GENERAL': { users: [] }, 'THREEFOLD': { users: [] }, 'JIMBER': { users: [] } };
            instance = this;
        }

        console.log("Returning instance ... ")
        return instance;
    }
    addRoom(name) {
        console.log("adding room");
        if (this.rooms[name] == null) {
            this.rooms[name] = { users: [] };
        }
    }
    joinRoom(roomName, userName) {
        if (this.rooms[roomName] == null) {
            console.log("joining room but null");
            this.addRoom(roomName);
        }
        this.rooms[roomName].users.push(userName);
    }
    leaveRoom(roomName, username) {
        this.rooms[roomName].users.pop();
    }
    getRoom(name) {
        return this.rooms[name];
    }
    getRooms() {
        return this.rooms;
    }
}

export default RoomList