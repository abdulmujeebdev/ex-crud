const Migration = require("../src/Generators/MigrationsGenerator");
const { modifiers } = require("../src/Lexers/ColumnTypes");
Migration.createMigrations([
  {

    schemaName:"User",
    definition: {
        columns: [
            {
                name: "id",
                dataType: "integer",
                modifiers: [
                    {
                        name: "notNullable"
                    },
                    {
                        name: "unique"
                    }
                ]
            },
            {
                name: "frist_name",
                dataType: "string",
                length: "20"
            },
            {
                name: "last_name",
                dataType: "string",
                length: "20"
            },
            {
                name: "role",
                dataType: "string",
                length: "20"
            }
        ]
    }
},

{
    schemaName: "Task",
    definition:{
        columns:[
            {
                name: "id",
                dataType: "integer",
                modifiers: [
                    {
                        name: "unique"
                    }
                ]
            },
            {
                name: "task_name",
                dataType: "string",
                length: "20"
            },
            {
                name: "instruction",
                dataType: "string",
                modifiers: [
                    {
                        name: "comment",
                        value: "There is no Istruction"
                    }
                ]
            },
            {
                name: "total_hours",
                dataType: "time"
            }

        ]
    }
}
]);