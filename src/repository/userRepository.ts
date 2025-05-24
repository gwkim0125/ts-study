import {Database} from "../data/database";
import {User} from "../entity/user";
import fs from "node:fs";

export class UserRepository {
    database: Database;

    constructor(database: Database) {
        this.database = database;
    }
    getUsers = () => {
        const readProfile = this.database.read("user.txt");
        let userList = [];
        for (let i = 0; i < readProfile.length; i++) {
            const userProfile = readProfile[i];
            const user = new User(userProfile[0], userProfile[1], userProfile[2]);
            userList.push(user);
        }

        return userList;
    }
    createUser = (email: string, password: string, nickname: string) => {
        fs.appendFileSync(
            "user.txt",
            `${email}, ${password}, ${nickname}\n`,
        );
        return new User(email, password, nickname);
    }
}