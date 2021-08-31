const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

app.use((req, res, next) => {
	var req_data = {
		method: req.method,
		path: req.url,
		ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
		start_date: new Date(),
	};
	console.log(`${req_data.start_date.toISOString()} Started request ${req_data.method} ${req_data.path} from ${req_data.ip}`);
	next();
	req_data.finish_date = new Date();
	console.log(`${req_data.finish_date.toISOString()} Finished request ${req_data.method} ${req_data.path} from ${req_data.ip} in ${req_data.finish_date - req_data.start_date} ms`);
});

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
