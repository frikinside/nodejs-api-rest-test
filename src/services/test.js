const mongoose = require("mongoose");
const TEST_SCHEMA = require("../models/test");

const TEST = mongoose.model("TEST");

module.exports.save = function () {
	const test = new TEST({
		name: "test_" + new Date().getTime(),
		count: 1,
		timestamp: new Date(),
	});

	test.save(function (err, test) {
		if (err) {
			throw err;
		}
	});

	return test;
};