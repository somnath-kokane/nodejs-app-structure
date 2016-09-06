'use strict';

var express = require('express');
var handler = require('./').handler;

module.exports = function(){
  var router = express.Router();

  router.get('/id/:id', function(req, res, next){
    handler
      .getById(req)
      .then(function(data){
        res.send(200, {success: true, data: data});
      })
      .catch(function(err){
        console.error('getById(): Error', {err: err.stack});
        next(err);
      })
  })

  router.get('/serial/:serial', function(req, res, next){
    handler
      .getByHardwareId(req)
      .then(function(data){
        res.send(200, {success: true, data: data});
      })
      .catch(function(err){
        console.error('getByHardwareId(): Error', {err: err.stack});
        next(err);
      })
  })

  router.get('/orgId/:orgId', function(req, res, next){
    handler
      .getByOrgId(req)
      .then(function(data){
        res.send(200, {success: true, data: data});
      })
      .catch(function(err){
        console.error('getByOrgId(): Error', {err: err.stack});
        next(err);
      })
  })

  router.post('/create', function(req, res, next){
    handler
      .create(req)
      .then(function(data){
        res.send(200, {success: true, data: data});
      })
      .catch(function(err){
        console.error('create(): Error', {err: err.stack});
        next(err);
      })
  })

  return router;
}