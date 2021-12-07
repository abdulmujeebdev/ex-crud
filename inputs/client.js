return [
  {
    schemaName: "PostTag",
    is_migration:true,
    is_model:true,
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
]