import { readFile, writeFile } from "../helper";
import { mapColumns } from "";

export const createMigration = (table) => {
  let migrationStub = prepareStub(table)
  console.log(migrationStub)
};

export const prepareStub = (table) => {

  let replacementStubObject = {
    '__CLASS_NAME__': table.schema_name,
    '__COLUMNS__': mapColumns(table.columns),
  };

  let migrationStub = Helper.replaceFromString(stub, replacementStubObject);
  return migrationStub;
};

const stub = () => {
  return readFile(stubPath);
};
