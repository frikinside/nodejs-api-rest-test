const express = require('express');
const test = require('./test');

const router = express.Router();

router.use('/test', test);

router.get('/', (req, res) => res.send('Testing NodeJS API'));

router.get('/check', (req, res) => {
	const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now(),
	};
	res.json(healthcheck);
});

router.get('/todo', (req, res) => {
	const todo = ['Error handling', 'full REST Api for Test model', 'Authentication', 'Permissions', 'Security', 'CORS and Headers validation'];
	res.json(todo);
});

module.exports = router;
