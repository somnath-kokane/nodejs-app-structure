'use strict';

var BaseModel = require('../base/model');

module.exports = Model;

function Model(data){
  var model = {};

  model.__proto__ = BaseModel();

  model.isValid = isValid;

  init();

  return model;

  function init(){
    model.data = data || {};
  }
}

function isValid(){
  return Object.keys(this.data).filter(function(it){
    return (!!it.hardwareId || !!it.deviceName);
  }).length > 0;
}

