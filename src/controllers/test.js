const testService = require("../services/test");

module.exports.save = function (req, res) {
	res.status(200).jsonp(testService.save());
};

module.exports.request = function (req, res) {
	res.status(200).jsonp({
		params: req.params,
		body: req.body,
		query: req.query,
	});
};
