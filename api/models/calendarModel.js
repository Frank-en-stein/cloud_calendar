'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  date: {
    type: Number,
    required: 'Kindly enter the name of the date'
  },
  month: {
    type: Number,
    required: 'Kindly enter the name of the month'
  },
  year: {
    type: Number,
    required: 'Kindly enter the name of the year'
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the event'
  },
  description: {
    type: String,
    default: '#'
  },
  created_date: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Events', EventSchema);
