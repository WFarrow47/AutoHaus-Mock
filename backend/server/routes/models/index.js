// get router from express
const router = require('express').Router();

// export routes
module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.render('models');
  });

  router.get('/:modelid', (req, res, next) => {
    return res.render('models/details');
  });
}