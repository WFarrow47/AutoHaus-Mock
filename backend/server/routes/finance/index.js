// get router from express
const router = require('express').Router();

module.exports = (param) => {
  router.get('/', (req, res, next) => {
    return res.render('finance', {finance: true,
    models: false,
    home: false,});
  });

  return router;
}