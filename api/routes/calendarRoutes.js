'use strict';
module.exports = function(app, socket) {
  var calendar = require('../controllers/calendarController');

  //Routes

  app.route('/events/:month/:year')
    .get(calendar.get_events);


  app.route('/event')
    .put(calendar.new_event)
    .post(calendar.update_event);

  app.route('/delete_event').post(calendar.delete_event);

  //middleware
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

};
