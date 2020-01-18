const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./apiRouter');

const app = express();

//middleware for all routes
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

//middleware just added to one route
const log = (req, res, next) => {
	console.log('LOGGING');
	req.data = [ 1, 2, 3, 4, 5 ];
	next();
};
app.use('/api/cat', router);

app.get('/', log, (req, res) => {
	res.send({ message: 'hello', data: req.data });
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});
app.listen(3000, () => console.log('listening'));
