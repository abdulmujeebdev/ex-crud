const Helper = require("../helper");

const createModel = (model) => {
  fs.readFile(
    "./node_modules/flex-crud-gen/src/Templates/Models/Model.js",
    (err, data) => {
      if (err) {
        return console.error(err);
      }
      const template = data.toString();

      const replacementObject = {
        '"{{MODEL_NAME}}"': `${model.schemaName}`,
        '"{{RELATIONS}}"': buildRelationships(model),
      };
      const populateTemplate = Helper.replaceFromString(
        template,
        replacementObject
      );
      Helper.writeFile(
        directory(),
        path(model.schemaName),
        populateTemplate
      );
    }
  );
};

const path = (modelName) => {
  let dir = directory();
  return dir + modelName;
};

const modelTemplatePath = () => {
  return "src/Templates/Models/Model.js";
};

const directory = (modelName) => {
  return "app/Models/";
};
