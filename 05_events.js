const fs = require('fs');

// Creating a stream
const stream = fs.createReadStream('./notes.txt');

// Event listener
stream.on('open', () => {
	console.log('The file is open');
});

stream.on('ready', () => {
	console.log('The file is ready to use');
});

stream.on('close', () => {
	console.log('The file has been closed');
});

// Closing the stream
stream.close();