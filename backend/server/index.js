// require express, path, bodyparser, http-errors
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const createError = require('http-errors');

// assign express to app
const app = express();

// Constants
const port = 3000;

// Config File.
const config = require('./config/config')[app.get("env")];

// require routes, services
const routes = require('./routes');
const { AHManage } = require('./services/Services');
const AHData = new AHManage(config.data.models, config.data.contacts);

// set view engine to ejs / html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// if enviroment is equal to development, allow pretty printing.
if(app.get('env') == 'development') app.locals.pretty = true;
// load static public files.
app.use(express.static('../public'));
// set views directory
app.set('views', path.join(__dirname, './views'));

// prevent favicon warning
app.use('/favicon.ico', (req, res, next) => {
  return res.sendStatus(204); // 204 - NO CONTENT
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//load routes
app.use('/', routes({AHData:AHData}));


// error handling


// 404 not found
app.use((req, res, next) => {
  return next(createError(404, "Not Found"));
});

// 500 internal server error
app.use((err, req, res, next) => {
  console.log("500 called");
  const estatus = err.status || 500;
  res.status(estatus);
  const errorJSON = {
    estatus: estatus,
    errorMsg: req.app.get('env') === "development" ? err : {},
    enotice: err.message
  }
  next(res.render('error', {
    error: errorJSON,
    finance: false,
    home: false,
    models: false
  }));
});

// listen on port 3000; defined by const port.
app.listen(port, () => console.log(`Listening on port ${port}`));
