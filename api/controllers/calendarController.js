'use strict';

var mongoose = require('mongoose'),
  Event = mongoose.model('Events');

var __dirname = './api/views';

exports.init = function(req, res) {
  res.sendFile('index.html', { root: __dirname });
};

exports.get_month = function(req, res) {

};

exports.new_event = function(req, res) {

};

exports.update_event = function(req, res) {

};

exports.delete_event = function(req, res) {

};
