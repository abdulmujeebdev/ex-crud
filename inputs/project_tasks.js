const Migration = require("../src/Generators/MigrationsGenerator");
const { modifiers } = require("../src/Lexers/ColumnTypes");
Migration.createMigrations([
  
  
    {
        schemaName:"Project",
        definition: {
        columns: [
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
                name: "project_name",
                dataType: "string",
                length: "20"
            }
            ,{
                name: "start_date",
                dataType: "date"
            },
            {
                name: "hourly_rate",
                dataType: "decimal"
            },
            {
                name: "budget",
                dataType: "decimal"
            },
            {
                name: "active",
                dataType: "boolean",
            },
            {
                   name: "total_hours",
                dataType: "time"
            }
            ,
            {
                name: "labour_cost",
                dataType: "decimal"
            }
            ,
            {
                name: "material_costs",
                dataType: "decimal"
            }
            ,
            {
                name: "total_costs",
                dataType: "decimal"
            }
            ,
            {
                name: "project_manager_id",
                dataType: "integer"
            }
            ,
            {
                name: "status_id",
                dataType: "integer",
                modifiers: [
                    {
                        name: "inTable",
                        value: "project_status"
                    }
                ]
            }
            ,
            {
                name: "client_id",
                dataType: "integer" ,
                modifiers: [
                    {
                        name: "inTable",
                        value: "client"
                    }
                ]
            }
        ]
        }
        },
        {
           schemaName: "Project_Status",
           definition: {
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
                       name: "status",
                       dataType: "boolean"
                   }
               ]
           }
        },
        {
            schemaName: "TaskStatus",
           definition:{
               columns: [
                   {
                       name: "id",
                       dataType: "integer",
                       modifiers: [
                           {
                               name: "unique"
    
                           }
                       ]
                   }
               ]
           }
        }
       
   
    
]);

