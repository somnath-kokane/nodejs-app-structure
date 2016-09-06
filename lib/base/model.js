'use strict';

module.exports = Model;

function Model(){

  return {
    set: set,
    get: get,
    toJSON: toJSON
  };

  function set(key, value){
    this.data[key] = value;
    return this;
  }

  function get(key, defaults){
    return this.data[key] || defaults;
  }

  function toJSON(){
    return this.data;
  }
}