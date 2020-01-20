const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// /api/item
router
	.route('/')
	//
	.get(controllers.getMany)
	//
	.post(controllers.createOne);

// /api/item/:id
router
	.route('/:id')
	//
	.get(controllers.getOne)
	//
	.put(controllers.updateOne)
	//
	.delete(controllers.removeOne);

module.exports = router;
