// get router from express
const router = require('express').Router();

module.exports = (param) => {
  const { AHData } = param;
  router.get('/', async (req, res, next) => {

    const suv = await AHData.getCategories("suv");
    const sedan = await AHData.getCategories("sedan");
    const superlux = await AHData.getCategories("superlux");
    
    return res.render('models', {
      suv, sedan, superlux,
      finance: false,
      models: true,
      home: false,
    });
  });

  router.get('/:modelid', async (req, res, next) => {
    const vehicle = await AHData.getVehicleByID(req.params.modelid);
    return res.render('models/details', {
      vehicle,
      finance: false,
      models: true,
      home: false,
    });
  });

  return router;
}