// require express, path.
const express = require('express');
const path = require('path');

// assign express to app
const app = express();

// Constants
const port = 3000;
// require routes, services
const routes = require('./routes');
const AutoHausServices = require('./services/AutoHouseService');
const autoHausEngine = new autoHausEngine(config.data);

// set view engine to PUG.
app.set('view engine', 'pug');
// if enviroment is equal to development, allow pretty printing.
if(app.get('env') == 'development') app.locals.pretty = true;
// load static public files.
app.use(express.static('./public'));
// set views directory
app.set('views', path.join(__dirname, './views'));
// prevent favicon warning
app.use('/favicon.ico', (req, res, next) => {
  return res.sendStatus(204); // 204 - NO CONTENT
});

//load routes
app.use('/', routes({})); // middlewear function required.

// error handling
app.use((err, req, res, next) => {
  res.locals.enotice = err.message;
  const estatus = err.status || 500;
  res.locals.estatus = estatus;
  res.locals.error = req.app.get('env') === "development" ? err : {};
  res.status(estatus);
  return res.render('error');
});


// listen on port 3000; defined by const port.
app.listen(port, () => console.log(`Listening on port ${port}`));
