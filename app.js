
const express = require('express');
const app = express();
const io = app.io = require('socket.io')();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./routes/users');
const rooms = require('./routes/rooms');
const room = require('./room_namespace');

app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
app.use(bodyParser.json());

/**
 * Middleware
 */
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

/**
 * Routing
 */
// app.use('/users', users)
app.use('/rooms', rooms)

// Static routing
app.use(express.static(path.join(__dirname, '../dist')));

/**
 * Room and user socket namespace
 */
room.createNameSpace(io)
// user.createNameSpace(io)


module.exports = app
