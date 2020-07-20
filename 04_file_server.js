const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const fileServer = http.createServer(function(req, res) {
	const q = url.parse(req.url, true);
	let filename = '.' + q.pathname;
	fs.readFile(filename, function(err, data) {
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end('404 Not Found');
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
});

fileServer.listen(port, hostname, function() {
	console.log(`Server running at http://${hostname}${port}/`);
});