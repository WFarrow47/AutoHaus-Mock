// require express router module only.
const router = require('express').Router();

// route consts
const modelsRoutes = require('./models');
const financeRoutes = require('./finance');


module.exports = (param) => {
  const { AHData } = param;

  router.get('/', async(req,res,next) => {
    const models = await AHData.getModels();
    const popularVehicles = await AHData.getPopularModels();
    return res.render('index', {page: 'index', models, popularVehicles,finance: false,
    models: false,
    home: true,});
  });

  router.use('/models', modelsRoutes(param));
  router.use('/finance', financeRoutes(param))

  return router;
};

