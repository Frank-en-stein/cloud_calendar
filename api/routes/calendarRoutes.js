'use strict';
module.exports = function(app, socket) {
  var calendar = require('../controllers/calendarController');

  //Routes

  app.route('/events/:month/:year')
    .get(calendar.get_events);


  app.route('/event')
    .put((req, res)=>calendar.new_event(req, res, socket))
    .post((req, res)=>calendar.update_event(req, res, socket));

  app.route('/delete_event').post((req, res)=>calendar.delete_event(req, res, socket));

  //middleware
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

};
