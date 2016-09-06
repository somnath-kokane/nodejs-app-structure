'use strict';

var nano = require('nano');

module.exports = {
  getCouchDb: function(database){
    return nano('http://127.0.0.1:5984')(database)
  }
}