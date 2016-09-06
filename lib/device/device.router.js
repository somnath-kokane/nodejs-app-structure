'use strict';

var express = require('express');
var handler = require('./').handler;

module.exports = Router();

function Router(){
  var router = express.Router();

  router.get('/id/:id', getById)
  router.get('/serial/:serial', getByHardwareId)
  router.get('/orgId/:orgId', getByOrgId)
  router.post('/create', create)

  return router;
}


function getById(req, res, next){
  var id, opt;

  id = req.params.id;
  opt = {
    userId: req.user.id
  }

  handler
    .getById(id, opt)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('getById(): Error', {err: err.stack});
      next(err);
    })
}

function getByHardwareId(req, res, next){
  var hardwareId, opt;

  hardwareId = req.params.serial;
  opt = {
    userId: req.user.id
  };

  handler
    .getByHardwareId(hardwareId, opt)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('getByHardwareId(): Error', {err: err.stack});
      next(err);
    })
}

function getByOrgId(req, res, next){
  var orgId, opt; 

  orgId = req.params.orgId;
  opt = {
    limit: req.query.limit,
    page: req.query.page,
    userId: req.user.id
  };

  handler
    .getByOrgId(orgId, opt)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('getByOrgId(): Error', {err: err.stack});
      next(err);
    })
}

function create(req, res, next){
  var opt, data;

  data = req.body;
  opt = {
    userId: req.user.id
  };
  
  handler
    .create(data, opt)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('create(): Error', {err: err.stack});
      next(err);
    })
}

