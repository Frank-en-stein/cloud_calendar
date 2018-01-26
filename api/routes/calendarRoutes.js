'use strict';
module.exports = function(app) {
  var calendar = require('../controllers/calendarController');

  //Routes
  app.route("/")
    .get(calendar.init);


  app.route('/month/:monthId')
    .post(calendar.get_month);


  app.route('/event/:eventId/:name/:date/:description/:status')
    .put(calendar.new_event)
    .post(calendar.update_event)
    .delete(calendar.delete_event);

  //middleware
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

};
