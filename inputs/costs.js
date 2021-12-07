const data = () => {
  return [
    {
      schemaName: "Milestone",
      options:{
        isMigration:true,
        isModel:true,
        isControllers:true
      },
      definition: {
        columns: [
          {
            name: "id",
            dataType: "bigincrements",
          },
          {
            name: "name",
            dataType: "string",
            length: "200",
          },
          {
            name: "duedate",
            dataType: "date",
          },
          {
            name: "deliverables",
            dataType: "string",
            length: "100",
          },
          {
            name: "status_id",
            dataType: "integer",
            modifiers: [
              {
                name: "unique",
              },
            ],
          },
          {
            name: "project_id",
            dataType: "integer",
            modifiers: [
              {
                name: "unique",
              },
            ],
          },
          {
            name: "total_hours",
            dataType: "decimal",
          },
        ],
      },
    },
    {
      schemaName: "MilestoneStatus",
      definition: {
        columns: [
          {
            name: "id",
            dataType: "bigincrements",
          },
          {
            name: "status",
            dataType: "boolean",
          },
        ],
      },
    },
    {
      schemaName: "Cost",
      definition: {
        columns: [
          {
            name: "id",
            dataType: "bigincrements",
          },
          {
            name: "name",
            dataType: "string",
            length: "100",
          },
          {
            name: "description",
            dataType: "text",
          },
          {
            name: "priceper",
            dataType: "decimal",
          },
          {
            name: "quantity",
            dataType: "integer",
          },
          {
            name: "totalcost",
            dataType: "decimal",
          },
          {
            name: "project_id",
            dataType: "integer",
            modifiers: [
              {
                name: "unique",
              },
            ],
          },
          {
            name: "milestone_id",
            dataType: "integer",
            modifiers: [
              {
                name: "unique",
              },
            ],
          },
        ],
      },
    },
    {
      schemaName: "Hour",
      definition: {
        columns: [
          {
            name: "id",
            dataType: "bigincrements",
          },
          {
            name: "date",
            dataType: "date",
          },
          {
            name: "time",
            dataType: "time",
          },
          {
            name: "workcompleted",
            dataType: "boolean",
          },
          {
            name: "task_id",
            dataType: "integer",
            modifiers: [
              {
                name: "unique",
              },
            ],
          },
          {
            name: "project_id",
            dataType: "integer",
            modifiers: [
              {
                name: "unique",
              },
            ],
          },
          {
            name: "employee_id",
            dataType: "integer",
            modifiers: [
              {
                name: "unique",
              },
            ],
          },
        ],
      },
    },
  ];
};
