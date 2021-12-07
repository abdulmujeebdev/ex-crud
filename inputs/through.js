const Migration = require("../src/Generators/MigrationsGenerator");
const { modifiers } = require("../src/Lexers/ColumnTypes");
Migration.createMigrations([
    {
      schemaName: "Country",
      relationships: [
        {
              key: "manyThrough",
              local_key: "id", 
              foreign_table: ["Post","City"],
              name:"posts", 
              foreign_key: "posts",
        },
      ],
      definition: {
        columns: [
          {
            name: "id",
            dataType: "bigincrements",
            
          },
          {
            name: "name",
            dataType: "string",
          },
        ],
      },
    },

    //2nd table 

{
    schemaName: "City",
    definition: {
      columns: [
        {
          name: "id",
          dataType: "bigincrements",
          
        },
        {
          name: "Title",
          dataType: "string",
        },
      ],
    },
  }

]);