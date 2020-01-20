const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 50
	},
	description: String,
	count: Number
});
module.exports = mongoose.model('list', listSchema);
