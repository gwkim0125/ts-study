import { UserEntity } from "../entity/user-entity";
import { IDatabase, IOldDatabase } from "./interfaces";

export class UserRepository {
  database: IDatabase & IOldDatabase;

  constructor(database: IDatabase & IOldDatabase) {
    this.database = database;
  }

  findUser = (email: string) => {
    const readProfile = this.database.read("user.txt");
    for (let i = 0; i < readProfile.length; i++) {
      const userProfile = readProfile[i];
      const user = new UserEntity(
        userProfile[0],
        userProfile[1],
        userProfile[2],
      );
      if (user.getEmail() === email) {
        return user;
      }
    }

    return null;
  };
  createUser = (email: string, password: string, nickname: string) => {
    const isTextExists = this.database.find("user.txt");
    if (!isTextExists) {
      return false;
    }

    this.database.write("user.txt", `${email}, ${password}, ${nickname}`);
    return true;
  };
}
