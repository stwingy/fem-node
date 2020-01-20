const { crudControllers } = require('./control');
const model = require('./model');
module.exports = crudControllers(model);
