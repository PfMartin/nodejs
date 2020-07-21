const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

port = 3000;
hostname = '192.168.70.226'; // The IP address of your server

const logging = (path) => {
	console.log(path);
}

const server = http.createServer((req, res) => {
	if(req.url === '/fileupload') {
		let form = new formidable.IncomingForm();
		form.parse(req, (err, fields, files) => {
			let oldpath = files.filetoupload.path;
			logging(oldpath);
			let newpath = `/home/martin/Documents/nodejs/received_files/${files.filetoupload.name}`;
			fs.rename(oldpath, newpath, (err) => {
				if (err) throw err;
				res.write('File uploaded and moved');
				res.end();
			});
		});
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'}); // status 200, html header

		// Create the upload form
		res.write(`<form action="fileupload" method="post" enctype="multipart/form-data">
			<input type="file" name="filetoupload"><br>
			<input type="submit">
			</from>`
		);
		return res.end();		
	}
});

server.listen(port, hostname, () => {
	console.log(`Server listening on ${hostname}:${port}`);
})