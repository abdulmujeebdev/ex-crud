const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class __CLASS_NAME__ extends Model {}

__CLASS_NAME__.init({
  // attributes
    __ATTRIBUTES__
}, {
  // Other options
  connection, // Dbconnection instance
  modelName: '__CLASS_NAME__' //model name
});
