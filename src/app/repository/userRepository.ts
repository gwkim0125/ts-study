import { TextDatabase } from "../data/textDatabase";
import { UserEntity } from "../entity/userEntity";
import {IDatabase} from "./interfaces";



export class UserRepository {
  database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }
  getUsers = () => {
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
    this.database.write("user.txt", `${email}, ${password}, ${nickname}`);
    return new UserEntity(email, password, nickname);
  };
}
