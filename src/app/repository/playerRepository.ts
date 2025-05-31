import { Database } from "../data/database";

export class PlayerRepository {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }
}
