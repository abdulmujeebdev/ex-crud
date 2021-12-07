exports.up = function(db) {

    db.createTable( '__CLASS_NAME__',
    {
      __COLUMNS__
    }, callback );
  };

  exports.down = function(db){
    db.dropTable('__CLASS_NAME__')
  }