'use strict';

var calendar = require('node-calendar'),
  cal = new calendar.Calendar(calendar.SUNDAY),
  mongoose = require('mongoose'),
  Event = mongoose.model('Events');

exports.get_events = function(req, res) {
  Event.find({year: req.params.year, month: req.params.month}, (err, task)=> {
    if(err) {
      res.sendStatus(err);
      console.log('DB error at controller > get_events');
    }
    else {
      var monthCalendar = cal.monthdayscalendar(req.params.year, parseInt(req.params.month)+1);
      res.json({calendar: monthCalendar, events: task});
    }
  });
};

exports.new_event = function(req, res) {
  var e = new Event(req.body);
  e.save((err, task)=>{
    if(err) {
      res.sendStatus(err);
      console.log('DB error at controller > new_event');
    }
    else res.json(e);
  });
};

exports.update_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, task)=>{
    if(err) {
      res.sendStatus(err);
      console.log('DB error at controller > update_event');
    }
    else res.json(task);
  });
};

exports.delete_event = function(req, res) {
  Event.remove({_id: req.body._id}, (err, task)=>{
    if(err) {
      res.sendStatus(err);
      console.log('DB error at controller > delete_event');
    }
    else res.json(req.body);
  });
};
