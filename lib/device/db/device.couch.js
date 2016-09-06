'use strict';

var Couch = require('../../base/db.couch');
var config = require('../../config');

module.exports = DeviceCouch;

function DeviceCouch(){

  var self = {};

  self.__proto__ = Couch();

  self.getByHardwareId = getByHardwareId;
  self.getByOrgId = getByOrgId;

  init();

  function init(){
    self.db = config.getCouchDb('device')
  }

  function getByHardwareId(hardwareId){
    var params = {key: ''+hardwareId.toLowerCase()};
    this.db.view('find', 'by_hardwareId', params, function(err, body){
      if(err){
        callback(err);
        return;
      }

      callback(null, body.rows[0].value);
    })
  }

  function getAllByOrgId(orgId, opt, cb){
    opt = opt || {};
    var params = {key: +orgId};
    this.view('find', 'by_orgId', params, opt, cb);
  }

}