const fs = require('fs');

const stream = fs.createReadStream('./notes.txt');

stream.on('open', () => {
	console.log('The file is open');
});

stream.on('ready', () => {
	console.log('The file is ready to use');
});

stream.on('close', () => {
	console.log('The file has been closed');
});

stream.close();