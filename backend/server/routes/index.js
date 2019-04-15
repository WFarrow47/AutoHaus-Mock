// require express router module only.
const router = require('express').Router();

// route consts
const modelsRoutes = require('./models');
const financeRoutes = require('./finance');
const contactsRoutes = require('./contacts');


module.exports = (param) => {
  const { AHData } = param;

  router.get('/', async(req,res,next) => {
    try {
      const models = await AHData.getModels();
      const popularVehicles = await AHData.getPopularModels();
      return res.render('index', {page: 'index', models, popularVehicles,finance: false,
      models: false,
      home: true,});
    } catch(error) {
      return next(error);
    }
   
  });

  router.post('/contact', async (req,res,next) => {
    const data = req.body;
    AHData.writeContactToFile(data).then(() => {
      res.json({hasError: false});
    }).catch(error => {
      console.log(error);
      res.json({hasError: true, errorMsg: error});
    });
  });

  router.use('/models', modelsRoutes(param));
  router.use('/finance', financeRoutes(param));
  router.use('/contacts', contactsRoutes(param));


  

  return router;
};

