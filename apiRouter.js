const express = require('express');
const router = express.Router();
const controller = (req, res) => {
	res.send('All cats');
};
router.route('/').get(controller).post((req, res) => {
	res.status(200).send('added a car');
});
router
	.route('/:id')
	.get((req, res) => {
		res.send(`got one particular cat ${req.params.id}`);
	})
	.put((req, res) => {
		res.send(`updated ${req.params.id}`);
	})
	.delete((req, res) => {
		res.send(`deleted ${req.params.id}`);
	});

module.exports = router;
