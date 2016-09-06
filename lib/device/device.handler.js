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
 * @param  {String} id 
 * @param {Object} opt
 * @return {Promise} 
 */
function getById(id, opt){
  return new Promise(function(resolve, reject){
    
    service.getById(id, opt, function(err, data){
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
 * @param {String} hardwareId
 * @return {Promise} 
 */
function getByHardwareId(hardwareId, opt){
  return new Promise(function(resolve, reject){
    
    service.getByHardwareId(hardwareId, opt, function(err, data){
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
 * @param  {Number|String} orgId 
 * @return {Promise}
 */
function getByOrgId(orgId, opt){
  return new Promise(function(resolve, reject){
  
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
 * @param  {String} data.hardwareId
 * @param  {String} data.deviceName
 * @return {Promise}
 */
function create(data, opt){
  return new Promise(function(resolve, reject){
    
    service.create(data, opt, function(err, data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}