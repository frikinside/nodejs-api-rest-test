const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express();

const TEST_SCHEMA = require('./models/test');
const TEST = mongoose.model('TEST');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

const routes = require('./routes');
app.use(routes);
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send({ error: `Error: ${err}` });
});

mongoose.connect('mongodb://localhost/api_rest_test', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
	if (err) {
		console.log('ERROR: connecting to Database. ' + err);
		process.exit(); //Maybe?
	}
	app.emit('DBConected');
});

module.exports = app;
