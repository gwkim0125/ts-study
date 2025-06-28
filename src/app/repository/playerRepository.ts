import { TextDatabase } from "../data/textDatabase";

export class PlayerRepository {
  database: TextDatabase;

  constructor(database: TextDatabase) {
    this.database = database;
  }
}
