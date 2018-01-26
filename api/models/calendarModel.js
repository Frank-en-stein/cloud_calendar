'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the event'
  },
  description: {
    type: String,
    default: '#'
  },
  Created_date: {
    type: Date,
    required: 'Kindly enter the date of the event'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed', 'expired']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Events', EventSchema);
