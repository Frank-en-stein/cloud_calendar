'use strict';

var mongoose = require('mongoose'),
  Event = mongoose.model('Events');

exports.init = function(req, res) {
  res.sendFile('index.html');
};

exports.get_events = function(req, res) {
  
};

exports.new_event = function(req, res) {

};

exports.update_event = function(req, res) {

};

exports.delete_event = function(req, res) {

};
