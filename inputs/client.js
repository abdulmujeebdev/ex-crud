const MigrationsGenerator = require("../src/Generators/MigrationsGenerator");
const { modifiers } = require("../src/Lexers/ColumnTypes");
MigrationsGenerator.createMigrations([
  {
    schemaName: "PostTag",
    definition: {
      columns: [
        {
          name: "post_id",
          dataType: "biginteger",
        },
        {
          name: "tag_id",
          dataType: "biginteger",
        },
      ],
    },
  },
], false);