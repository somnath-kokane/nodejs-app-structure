'use strict';

var Promise = require('bluebird');
var service = require('./').service;
var Model = require('./').Model;

module.exports = Handler();

function Handler(){
  return {
    getById: getById,
    getByHardwareId: getByHardwareId,
    getByOrgId: getByOrgId,
    create: create
  };
}

/**
 * getById
 * 
 * @param  {Object} req 
 * @params {String} req.params.id
 * @return {Promise} 
 */
function getById(req){
  return new Promise(function(resolve, reject){
    var id = req.params.id;
    if(!!id === false){
      reject(new Error('id is not defined'));
      return;
    }
    service.getById(id, null, function(err, data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    });
  })
}

/**
 * getByHardwareId
 * 
 * @param {String} req.params.serial
 * @return {Promise} 
 */
function getByHardwareId(req){
  return new Promise(function(resolve, reject){
    var hardwareId = req.params.serial;
    if(!!hardwareId === false){
      reject(new Error('hardwareId is not defined'));
      return;
    }
    service.getByHardwareId(hardwareId, null, function(err, data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}

/**
 * getByOrgId
 * 
 * @param  {Number|String} req.params.orgId 
 * @return {Promise}
 */
function getByOrgId(req){
  return new Promise(function(resolve, reject){
    var opt = {};
    var orgId = req.params.orgId;
    if(!!orgId === false){
      reject(new Error('orgId is not defined'));
      return;
    }
    
    opt.page = req.query.page;
    opt.limit = req.query.limit;

    service.getByOrgId(orgId, opt, function(err, data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}

/**
 * create
 * 
 * @param  {String} req.body.hardwareId
 * @param  {String} req.body.deviceName
 * @return {Promise}
 */
function create(req){
  return new Promise(function(resolve, reject){
    var data = req.body;
    var model = Model(data);
    if(!model.isValid()){
      reject(new Error('invalid data'));
      return;
    }
    service.create(model, null, function(err, data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}