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
  handler
    .getById(req)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('getById(): Error', {err: err.stack});
      next(err);
    })
}

function getByHardwareId(req, res, next){
  handler
    .getByHardwareId(req)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('getByHardwareId(): Error', {err: err.stack});
      next(err);
    })
}

function getByOrgId(req, res, next){
  handler
    .getByOrgId(req)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('getByOrgId(): Error', {err: err.stack});
      next(err);
    })
}

function create(req, res, next){
  handler
    .create(req)
    .then(function(data){
      res.send(200, {success: true, data: data});
    })
    .catch(function(err){
      console.error('create(): Error', {err: err.stack});
      next(err);
    })
}

