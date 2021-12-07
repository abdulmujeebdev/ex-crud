import {createMigration} from "../services/migration.service"

class Generator {
  constructor(data) {
    this.data = data;
  }

  index() {
    this.data.forEach((table) => {
      if (table.migration_flag) {
        createMigration(table);
      }
      if (table.is_model) {
      }
      if (table.is_crud) {
      }
      if (table.is_controller) {
      }
    });
  }
}
module.exports = DefaultController;
