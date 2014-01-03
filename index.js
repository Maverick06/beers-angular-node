var express = require('express'),
	 http 	= require('http'),
	 beers 	= require('./data/beers.json');

var app = express()
	.use(express.bodyParser())
	.use(express.static('public'));

var getNewUniqueID = function (dataSource) {

	var id = (Math.random() + ' ').substring(2,10) + (Math.random() + ' ').substring(2,10);

	// for the one in a bazillion chance that the ID already exists
	if (dataSource[id] != undefined) {
		getNewUniqueID();
		return;
	} else {
		return id;
	}

};	

// view a list of all beers
app.get('/beers', function (req, res) {
	res.json(beers);
});

// get a specific beer
app.get('/beers/:beer', function (req, res) {
	if (typeof beers[req.params.beer] === 'undefined') {
		res.json(404, {status: 'not found - invalid beer code'});
	} else {
		res.json(beers[req.params.beer]);
	}
});

// delete a beer
app.delete('/beers/:beer', function (req, res) {
	
	var index = req.params.beer;

	if (typeof beers[index] === 'undefined') {

		res.json(404, {status: 'not found - invalid beer code'});

	} else {
		
		delete beers[index];

		res.json({status: 'deleted ' + index});
	}
});

// add or update a beer
app.post('/beers', function  (req, res) {

	var code = req.body.code;

	if (!code) {
		code = getNewUniqueID(beers);   
		req.body.code = code;
	}	

	beers[code] = req.body;

	res.json(req.body);

});

app.get('/*', function  (req, res) {
	res.json(404, {status: 'not found'});
});

http.createServer(app).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
	console.log("Server rockin.");
});

