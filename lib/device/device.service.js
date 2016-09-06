'use strict';

var db = require('./').db;
var Model = require('./').Model;

module.exports = Service();

function Service(){

  return {
    getById: getById,
    getByHardwareId: getByHardwareId,
    getByOrgId: getByOrgId,
    create: create
  };

}

function create(model, opt, cb){
  var model = Model(data, opt);
  if(!model.isValid()){
    cb(new Error('invalid data'));
    return;
  }
  db.create(model.toJSON(), opt, cb);
}

function getById(id, cb){
  if(!!id === false){
    cb(new Error('id is not defined'));
    return;
  }

  db.getById(id, cb);
}

function getByHardwareId(hardwareId, opt, cb){
  if(!!hardwareId === false){
    cb(new Error('hardwareId is not defined'));
    return;
  }

  db.getByHardwareId(hardwareId, opt, cb);
}

function getByOrgId(orgId, opt, cb){
  if(!!orgId === false){
    cb(new Error('orgId is not defined'));
    return;
  }

  db.getByOrgId(orgId, opt, cb);
}


