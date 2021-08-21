const mongoose = require("mongoose");
const TEST_SCHEMA = require("../models/test");

const TEST = mongoose.model("TEST");

module.exports.list = (filter) => {
	return TEST.find(filter);
};

module.exports.findById = (id) => {
	return TEST.findById(id);
};

module.exports.find = (filter) => {
	return TEST.findOne(filter);
};

module.exports.increment = (test) => {
	test.count++;
	return test.save();
};

module.exports.save = (name) => {
	const test = new TEST({
		name: name || "test_" + new Date().getTime(),
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
