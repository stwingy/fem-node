const mongoose = require('mongoose');
const connect = (url, opts = {}) => {
	return mongoose.connect(url, { ...opts, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
};
let db = mongoose.connection;

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
	await connect('mongodb://localhost:27017/api-testDB');
	console.log('connected');
	const list = await listModel.create({ name: 'second', description: 'start3', count: 3 });

	console.log('CREATE ', list);
	console.log('READALL ', await listModel.find({}).exec());
	console.log('READ ', await listModel.findById(list._id).exec());
	const updated = await listModel
		.findByIdAndUpdate(
			list._id,
			{ name: 'rubbish' },
			{ new: true } //so it returns new values     update
		)
		.exec();
	console.log('UPDATE ', updated);
	const deleted = await listModel.findByIdAndRemove(list._id).exec();
	console.log('DELETE ', deleted);
	db.close();
	console.log('disconnected');
};
run();
//mongoose.Types.ObjectId  -fake reference
//C-model.create()
//R-model.find() model.findOne() model.findById()
//U-model.update() model.findOneAndUpdate() model.findByIdAndUpdate()
//D=model.remove() model.findByIdAndRemove() model.findOneAndRemove()

module.exports = listModel;
