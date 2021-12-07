import {ColumnTypes} from "../../constants/ColumnTypes"

export const mapColumns = (columns)=> {
    return columns
      .map((column, colIndex) => {
    let columnStr = `table.` + findColumnType(column);
      if (typeof(column.modifiers) !="undefined" && column.modifiers.length>0) {
        columnStr += column.modifiers.map((modifier)=>{
          return "." + mapModifier(modifier);
        }).join("");
      }

      return `${columnStr}${(colIndex === columns.length - 1) ? '' : `\n      `}`;
    })
    .join("");

};

const findColumnType = (column)=>{
  let column_type = ColumnTypes.dataTypes[column.dataType];
  if(typeof column_type !="undefined"){
    return mapColumnParams(column,column_type);
  }
  else{
    console.log("Column type undefined" + JSON.stringify(column));
  }
}

const mapModifier = (modifier)=>{
  let modifier_type = ColumnTypes.modifiers[modifier.name];
  return mapColumnParams(modifier,modifier_type);
}

const mapColumnParams = (column,column_type) =>{

  const indexOfSingleBracket = column_type.indexOf("(");
  if (indexOfSingleBracket === -1) {
    //  If column type is not callable function like bigInteger or char
    return column_type;
  }
  const parametersStr = column_type.slice(indexOfSingleBracket + 1, -1);
  // If empty perameters;
  if (!parametersStr) return column_type;
  const parameters = parametersStr
    .split(",")
    .map((param) => {
      param = param.trim();
      let isOptional = false;
      if (param.includes("[")) {
        param = param.slice(1, -1);
        isOptional = true;
      }

      const bindingValue = column[param];
      if (!isOptional && !bindingValue) {
        throw column.name + ` having ${param} field is required`;
      } else if (bindingValue) {
        return typeof bindingValue === "string"
          ? `'${bindingValue}'`
          : bindingValue;
      }
      return "";
    })
    .filter((value) => !!value)
    .join(", ");
  return `${column_type.slice(0, indexOfSingleBracket)}(${parameters})`;
}