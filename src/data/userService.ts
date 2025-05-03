import fs from "node:fs";
import { User } from "../entity/user";

export class UserService {
  getUser = (email: string, password: string) => {
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
  findUser = (email: string) => {
    const userTextData = fs.readFileSync("user.txt").toString();
    const userDataRows = userTextData.split("\n");
    for (let i = 0; i < userDataRows.length; i++) {
      const userProfile = userDataRows[i].split(", ");
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


