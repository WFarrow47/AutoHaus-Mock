// require express router module only.
const router = require('express').Router();

// route consts
const modelsRoutes = require('./models');
// const financeRoutes = require('./finance');

module.exports = () => {
  router.get('/', (req,res,next) => {
    return res.render('index');
  });

  router.use('/models', modelsRoutes());
  return router;
};
