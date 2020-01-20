const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

const connect = (url, opts = {}) => {
	return mongoose.connect(url, { ...opts, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
};
connect('mongodb://localhost:27017/api-testDB');
console.log('connected');

app.listen(3000, () => console.log('listening'));
