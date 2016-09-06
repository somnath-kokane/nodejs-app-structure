'use strict';

var db = require('./').db;

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
  var data = model.toJSON();
  db.create(data, opt, cb);
}

function getById(id, cb){
  db.getById(id, cb);
}

function getByHardwareId(hardwareId, opt, cb){
  db.getByHardwareId(hardwareId, opt, cb);
}

function getByOrgId(orgId, opt, cb){
  db.getByOrgId(orgId, opt, cb);
}


