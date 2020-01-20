const { crudControllers } = require('./control');
const model = require('./model');
module.exports = crudControllers(model)



//overwrite removeOne
//module.exports = {...crudControllers(model),removeOne(req,res){res.send("NO DELETE")}}
