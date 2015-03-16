var port = 1337;
var express = require('express');
var app = express();

app.use('/', function(req, res) {
	res.send('Howdy world');
});

app.listen(port);

console.log('Server running at http://localost: ' + port);