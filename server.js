var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  CalendarModel = require('./api/models/CalendarModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Calendardb');
process.on('unhandledRejection', (reason, p) => {
  //console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  console.log('mongodb connection failed');
    // application specific logging, throwing an error, or other logic here
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/calendarRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
