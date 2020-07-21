const fs = require('fs');

// let oldPath = '/tmp/upload_bb402a9aabe7e8f3b96d565e70ed7b1d';
let oldPath = '/tmp/upload_bb402a9aabe7e8f3b96d565e70ed7b1d';
let newPath = '/home/martin/Documents/nodejs/upload1.txt';

let mv = fs.rename(oldPath, newPath, (err) => {
	if (err) throw err;

});