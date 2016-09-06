'use strict';

exports.device = require('./device');

exports.routes = function(app){
  app.use('/device', require('./device').routes);
}