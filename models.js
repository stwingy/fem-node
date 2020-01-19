const mongoose = require('mongoose');

const connect = (url, opts = {}) => {
	return mongoose.connect(url, { ...opts, useNewUrlParser: true, useUnifiedTopology: true });
};

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
const listModel = mongoose.model('list', listSchema);
const run = async () => {
	await connect('mongodb://localhost:27017/api-test');
	const list = await listModel.create({ name: 'first', description: 'start', count: 1 }); //create
	console.log(list);
	console.log(await list.findById(list._id).exec()); //read  exec turns into real promise
	const updated = await list
		.findByIdAndUpdate(
			list._id,
			{ name: 'initial' },
			{ new: true } //so it returns new values     update
		)
		.exec();
	console.log(updated);
	const deleted = await list.findByIdAndRemove(list._id).exec();
};
run();
//mongoose.Types.ObjectId  -fake reference
//C-model.create()
//R-model.find() model.findOne() model.findById()
//U-model.update() model.findOneAndUpdate() model.findByIdAndUpdate()
//D=model.remove() model.findByIdAndRemove() model.findOneAndRemove()

module.exports = listModel;
