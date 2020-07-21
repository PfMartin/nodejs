const events = require('events');
const eventEmitter = new events.EventEmitter();

const eventHandler = () => {
	console.log('I hear a scream');
}

// Event listener
eventEmitter.on('scream', eventHandler);

// Fire the event scream
eventEmitter.emit('scream');