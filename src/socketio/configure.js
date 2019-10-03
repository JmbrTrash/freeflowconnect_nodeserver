import socketIO from 'socket.io'
import events from './events/events'

function configure(server, config) {
    const io = socketIO(server)
    
    io.origins("*:*")
    io.of(config.ROOMS_NAMESPACE).on('connection', events)
}

export default configure
