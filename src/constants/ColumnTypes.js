
class ColumnTypes {
    static relationships = {
      belongsTo: "belongsTo",
      manyToMany:"belongsToMany",
      oneToMany: "hasMany",
      oneToOne: "hasOne",
      manyThrough: "manyThrough",
    };
  
    static dataTypes = {
      increments: "increments(name)",
      bigincrements: "bigIncrements()",
      biginteger: "bigInteger(name)",
      binary: "binary(name, [length])",
      boolean: "boolean(name,[options])",
      date: "date(name)",
      char: "char",
      datetime: "datetime(name, [precision])",
      decimal: "decimal(name, [precision], [scale])",
      enum: "enu(col, values, [options])",
      float: "float(name, [precision], [scale])",
      increments: "increments(name)",
      integer: "integer(name)",
      json: "json(name)",
      string: "string(name, [length])",
      text: "text(name, [textType])",
      time: "time(name, [precision])",
      timestamp: "timestamp(name, [useTz], [precision])",
      timestamps: "timestamps([useTimestamps], [defaultToNow])",
      uuid: "uuid(name)",
    };
  
    static modifiers = {
      // autoincrement: "autoIncrement",
      // ondelete: "onDelete",
      // onupdate: "onUpdate",
      first: "first()",
      index: "index([indexName], [indexType])",
      after: "after(value)",
      alter: "alter()",
      collate: "collate(value)",
      inTable: "inTable(value)",
      comment: "comment(value)",
      notNullable: "notNullable()",
      nullable: "nullable()",
      primary: "primary([columns],[constraintName])",
      reference: "references(column)",
      unique: "unique()",
      unsigned: "unsigned()"
    };
  
  }
  
  module.exports = ColumnTypes;
  