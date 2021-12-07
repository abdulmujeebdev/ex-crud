import { createMigration } from "../services/migration.service"
let json_data = [
  {
    schema_name: "client",
    is_migration: true,
    is_model: true,
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
    relationships: []
  },
];

json_data.forEach((table) => {
  if (table.is_migration) {
    createMigration(table);
  }
});