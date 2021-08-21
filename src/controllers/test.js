const testService = require('../services/test');

module.exports.save = (req, res) => {
	res.json(testService.save(req.params.name));
};

module.exports.list = async (req, res) => {
	res.json(await testService.list(req.query));
};

module.exports.getById = async (req, res) => {
	res.json(await testService.findById(req.params.id));
};

module.exports.getByName = async (req, res) => {
	res.json(await testService.find({ name: req.params.name }));
};

module.exports.increment = async (req, res) => {
	try {
		let test = await testService.find({ name: req.params.name });
		test = await testService.increment(test);
		res.json(test);
	} catch (err) {
		console.error('ERROR', err);
		res.status(500).send(`Error: ${err}`);
	}
};

module.exports.request = (req, res) => {
	res.json({
		headers: req.headers,
		params: req.params,
		body: req.body,
		query: req.query,
	});
};
