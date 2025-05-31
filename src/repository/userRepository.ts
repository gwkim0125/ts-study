import { Database } from "../data/database";
import { UserEntity } from "../entity/userEntity";
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
      const user = new UserEntity(userProfile[0], userProfile[1], userProfile[2]);
      userList.push(user);
    }

    return userList;
  };
  createUser = (email: string, password: string, nickname: string) => {
    this.database.write("user.txt", `${email}, ${password}, ${nickname}`);
    return new UserEntity(email, password, nickname);
  };
}
