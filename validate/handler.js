'use strict';

var lib = require('./lib');

module.exports.handler = function(event, context, cb) {
  lib.validate(event, function(error, response) {
    return context.done(error, response);
  });
};
