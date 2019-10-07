let instance = null;

class RoomList {
    constructor() {
        if(instance ===  null) {
            console.log("Setting instance ...")
            // this.rooms = { 'GENERAL': { users: [] }, 'THREEFOLD': { users: [] }, 'JIMBER': { users: [] } };
            this.rooms = {};
            instance = this;
        }

        console.log("Returning instance ... ")
        return instance;
    }
    addRoom(name) {
        if (this.rooms[name] == null) {
            console.log("Adding room: " + name);
            this.rooms[name] = { users: [] };
        }
    }
    joinRoom(roomName, userName) {
        if (this.rooms[roomName] == null) {
            console.log("joining room: " + roomName + " but room does not exist adding room ... ");

            if(roomName !== undefined && roomName !== null) {
                this.addRoom(roomName);
            }
        }

        if(this.rooms[roomName] != null && userName !== undefined && userName !== null) {
            this.rooms[roomName].users.push(userName);             
        }
    }
    leaveRoom(roomName, username) {
        if(this.rooms !== undefined && this.rooms !== null && roomName !== undefined && roomName !== null) {
            console.log("Deleting: " + username)
            this.rooms[roomName].users.splice(this.rooms[roomName].users.indexOf(username), 1)
        } 
    }
    getRoom(name) {
        if(this.rooms !== undefined && this.rooms !== null && 
            name !== undefined && name !== null) {
            return this.rooms[name];
        }
    }
    getRooms() {
        return this.rooms;
    }
}

export default RoomList