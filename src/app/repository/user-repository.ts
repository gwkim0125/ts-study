import { UserEntity } from "../entity/user-entity";
import { IDatabase, IOldDatabase } from "./interfaces";

export class UserRepository {
  database: IDatabase & IOldDatabase;

  constructor(database: IDatabase & IOldDatabase) {
    this.database = database;
  }
  getUsers = () => {
    //const findProfile = this.database.find("user.txt");
    // if (!findProfile) {
    //   return [];
    // }
    // this.database.convertToCSV("user.txt")
    const readProfile = this.database.read("user.txt");
    let userList = [];
    for (let i = 0; i < readProfile.length; i++) {
      const userProfile = readProfile[i];
      const user = new UserEntity(
        userProfile[0],
        userProfile[1],
        userProfile[2],
      );
      userList.push(user);
    }

    return userList;
  };
  createUser = (email: string, password: string, nickname: string) => {
    const isTextExists = this.database.find("user.txt");
    if (!isTextExists) {
      return null;
    }
    this.database.write("user.txt", `${email}, ${password}, ${nickname}`);
    return new UserEntity(email, password, nickname);
  };
}
