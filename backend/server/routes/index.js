// require express router module only.
const router = require('express').Router();

// route consts
const modelsRoutes = require('./models');
const financeRoutes = require('./finance');
const contactsRoutes = require('./contacts');


module.exports = (param) => {
  const { AHData } = param;

  router.get('/', async(req,res,next) => {
    const models = await AHData.getModels();
    const popularVehicles = await AHData.getPopularModels();
    return res.render('index', {page: 'index', models, popularVehicles,finance: false,
    models: false,
    home: true,});
  });

  router.post('/contact', async (req,res,next) => {
    const data = req.body;
    AHData.writeContactToFile(data).then(() => {
      res.send('200');
    }).catch(error => {
      res.send('500');
    });
  });

  router.use('/models', modelsRoutes(param));
  router.use('/finance', financeRoutes(param));
  router.use('/contacts', contactsRoutes(param));

  return router;
};

