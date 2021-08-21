var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var test_schema = new Schema({
	name: { type: String },
	count: { type: Number },
	timestamp: { type: Date },
});

module.exports = mongoose.model('TEST', test_schema);
