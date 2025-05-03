import fs from "node:fs";
import { User } from "../entity/user";

export class Database {
  getUser = async (email: string, password: string) => {
    const userTextData = fs.readFileSync("user.txt").toString();
    const userDataRows = userTextData.split("\n");
    for (let i = 0; i < userDataRows.length; i++) {
      const userProfile = userDataRows[i].split(", ");
      const user = new User(userProfile[0], userProfile[1], userProfile[2]);

      if (user.getEmail() === email && user.getPassword() === password) {
        return user;
      }
    }
    return null;
  };
}
