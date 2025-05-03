import { input } from "../library/input";
import fs from "node:fs";
import { Database } from "../data/databse";

export class AuthUI {
  signIn = async () => {
    const userEmail = await input("Please enter your email: ");
    if (userEmail.includes("@") === false) {
      console.log("Email is wrong.");
      return null;
    }

    const userPassword = await input("Please enter your password: ");
    if (userPassword.length < 4) {
      console.log("Your Password is too short.");
      return null;
    }

    const database = new Database();
    return database.getUser(userEmail, userPassword);
  };
  signUp = async () => {
    const userEmail = await input("Please enter your email: ");
    if (userEmail.includes("@") === false) {
      console.log("Email is wrong.");
      return false;
    }

    const userPassword = await input("Please enter your password: ");
    if (userPassword.length < 4) {
      console.log("Your Password is too short.");
      return false;
    }

    const userNickname = await input("Please enter your Nickname: ");
    const userTextData = fs.readFileSync("user.txt").toString();
    const userDataRows = userTextData.split("\n");
    let isFoundEmail = false;
    for (let i = 0; i < userDataRows.length; i++) {
      const userProfile = userDataRows[i].split(", ");
      if (userProfile[0] === userEmail) {
        isFoundEmail = true;
        console.log("User Email is already in use.");
        return false;
      }
    }

    fs.appendFileSync(
      "user.txt",
      `${userEmail}, ${userPassword}, ${userNickname}\n`,
    );
    return true;
  };
}
