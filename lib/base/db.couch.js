'use strict';

module.exports = Couch;

function Couch(){

  return {
    getById: getById,
    view: view
  };

  function getById(id, cb){
    this.db.get(id, cb);
  }

  function view(name, key, params, opt, cb){
    opt = opt || {};
    var limit = opt.limit || 100;
    if(opt.page){
      params.skip = (opt.page * limit);
    }
    
    this.view(name, key, params, function(err, body){
      var result;

      if(err){
        cb(err);
        return;
      }

      if(!body.rows.length){
        cb(new Error('no docs found by '+name+'/'+key));
        return;
      }

      result = {
        rows: body.rows.map(function(row){
          row.value.id = row.value._id;
          row.value.rev = row.value._rev;
          return row.value;
        }),
        page: (body.offset / limit) + 1,
        limit: limit.
        total: body.total_rows
      };
      
      cb(null, result);
    });
  }
}