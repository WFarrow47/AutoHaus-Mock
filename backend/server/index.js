// require express, path
const express = require('express');
const path = require('path');

// assign express to app
const app = express();

// Constants
const port = 3000;

// Config File.
const config = require('./config/config')[app.get("env")];

// require routes, services
const routes = require('./routes');
const { AHManage } = require('./services/Services');
const AHData = new AHManage(config.data.models);

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

app.use(async (req, res, next) => {
  try {
    const models = await AHData.getModels();
    const popularVehicles = await AHData.getPopularModels();
    return next();
  } catch (err) {
    return next(err);
  }
});

//load routes
app.use('/', routes({AHData:AHData}));
// error handling
app.use((err, req, res, next) => {
  res.locals.enotice = err.message;
  const estatus = err.status || 500;
  res.locals.estatus = estatus;
  res.locals.error = req.app.get('env') === "development" ? err : {};
  res.status(estatus);
  return res.render('error', {finance: false, home: false, models: false});
});


// listen on port 3000; defined by const port.
app.listen(port, () => console.log(`Listening on port ${port}`));
