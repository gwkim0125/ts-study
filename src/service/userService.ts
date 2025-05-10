import fs from "node:fs";
import { User } from "../entity/user";
import { Database } from "../data/database";

export class UserService {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  getUser = (email: string, password: string) => {
    const userProfiles = this.database.read("user.txt")
    for (let i = 0; i < userProfiles.length; i++) {
      const userProfile = userProfiles[i];
      const user = new User(userProfile[0], userProfile[1], userProfile[2]);

      if (user.getEmail() === email && user.getPassword() === password) {
        return user;
      }
    }
    return null;
  };
  findUser = (email: string) => {
    const userProfiles = this.database.read("user.txt")
    for (let i = 0; i < userProfiles.length; i++) {
      const userProfile = userProfiles[i];
      const user = new User(userProfile[0], userProfile[1], userProfile[2]);

      if (user.getEmail() === email) {
        return user;
      }
    }
    return null;
  }

  createUser = (email: string, password: string, nickname: string) => {
    fs.appendFileSync(
        "user.txt",
        `${email}, ${password}, ${nickname}\n`,
    );
  }
}


