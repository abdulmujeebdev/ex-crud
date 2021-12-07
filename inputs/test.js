const Migration = require("../src/Generators/MigrationsGenerator");
const { modifiers } = require("../src/Lexers/ColumnTypes");
Migration.createMigrations([
{
       schemaName: "Milestone",
       relationships: [
        {
              key: "oneToMany",
              local_key: "id", 
              foreign_table: "MilestoneStatus", 
              foreign_key: "milestone_id",
        }
      ],
        definition: {
            columns:[
                {
                    name: "id",
                    dataType: "bigincrements",
                    
                },
                {
                    name: "name",
                    dataType: "string",
                    length: "200"
                },
                {
                    name: "duedate",
                    dataType: "date"
                },
                {
                    name: "deliverables",
                    dataType: "string",
                    length: "100"
                },
                {
            name: "status_id",
            dataType: "integer",
            modifiers: [
                {
                    name: "unique",
                    
                }
            ] 
                },
                 {
            name: "project_id",
            dataType: "integer",
            modifiers: [
                {
                    name: "unique",
                    
                }
            ] 
                },
                {
                    name: "total_hours",
                    dataType: "decimal"
                }  

            ]
        }

   },
   {
    schemaName: "MilestoneStatus",
    relationships: [
        {
              key: "belongsTo",
              local_key: "milestone_id", 
              foreign_table: "Milestone", 
              foreign_key: "id",
        }
      ],
    definition: {
        columns: [
            {
                name: "id",
                dataType: "bigincrements",
                
            },
            {
                name: "status",
                dataType: "boolean"
            },
            {
                name: "milestone_id",
                dataType: "biginteger"
            }
        ]
        
    }
}
]);