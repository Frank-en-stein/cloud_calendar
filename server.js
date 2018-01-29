var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  socketServer = require('http').createServer(app),
  io = require('socket.io').listen(socketServer),
  port = process.env.PORT || 3000,
  socketPort = 3030,
  mongoose = require('mongoose'),
  CalendarModel = require('./api/models/CalendarModel'), //created model loading here
  bodyParser = require('body-parser'),
  path = require('path');

var __rootDir = './api/views';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Calendardb');
process.on('unhandledRejection', (reason, p) => {
  //console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  console.log('mongodb connection failed');
});

app.use(express.static(path.join(__rootDir)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//socketio setup
io.on('connection', (socket) => {
  console.log('new connection made');

  socket.join('CloudCalendar');

});

var routes = require('./api/routes/calendarRoutes'); //importing route
routes(app, 5); //register the route

server.listen(port);
socketServer.listen(socketPort);

console.log('Cloud Calendar RESTful API server started on: ' + port + ', socketIO on: ' + socketPort);
