import { readFile, writeFile } from "../helper";

export const createMigration = (table) => {
  let migrationStub = prepareStub(table)
  //Helper function to create file
};

export const prepareStub = (table) => {
  let constraints = "";
  let mapped_columns = mapColumns(table.definition.columns);

  let replacementStubObject = {
    '"{{class}}"': table.schemaName,
    '"{{tableName}}"': `"${getTableName(table.schemaName)}"`,
    '"{{definition}}"': mapped_columns,
    '"{{constraints}}"': constraints,
  };

  let migrationStub = validator.replaceFromString(stub, replacementStubObject);
  return migrationStub;
};

const stub = () => {
  return readFile(stubPath);
};
