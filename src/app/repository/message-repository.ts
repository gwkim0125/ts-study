import {IDatabase, IOldDatabase} from "./interfaces";

export class MessageRepository {
    database: IDatabase & IOldDatabase

    constructor(database: IDatabase & IOldDatabase) {
        this.database = database;
    }
    createMessage = (message:string) => {
        this.database.write("message.txt", `${message}`);
        return true;
    }
}