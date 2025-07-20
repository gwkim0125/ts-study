import { IDatabase, IOldDatabase } from "./interfaces";

export class MessageRepository {
  database: IDatabase & IOldDatabase;

  constructor(database: IDatabase & IOldDatabase) {
    this.database = database;
  }
  createMessage = (email: string, message: string) => {
    this.database.write("message.txt", `${email}, ${message}`);
    return true;
  };
}
