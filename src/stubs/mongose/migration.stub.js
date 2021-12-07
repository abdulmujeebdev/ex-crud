exports.up = function (db, callback) {
    db.createCollection(__COLLECTION_NAME__, callback);
    __ATTRIBUTES__
  }

  exports.down = function(db){
    db.dropCollection(__COLLECTION_NAME__, callback)
  }