
  const data = ()=> {
    return [
      {
        schemaName: "Post", // (pascal) modelname Alphabetic chracters
        relationships: [
          {
            key: "manyToMany", //fixed
            local_key: "id",
            foreign_table: "Tag", // modelname pascal
            foreign_key: "id",
          },

          {
            key: "oneToOne", //fixed
            local_key: "contact_id",
            foreign_table: "Contact", // modelname pascal
            foreign_key: "id",
          },
        ],
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
            {
              name: "Description",
              dataType: "string",
            },
          ],
        },
      },
      //2nd table

      {
        schemaName: "Tag",
        definition: {
          columns: [
            {
              name: "id",
              dataType: "bigincrements",
            },
            {
              name: "Meta",
              dataType: "string",
            },
          ],
        },
      },
    ];
  }
  module.exports = data();
