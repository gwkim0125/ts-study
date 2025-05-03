import { input } from "../library/input";
import fs from "node:fs";
import { UserService } from "../data/userService";

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

    const userService = new UserService();
    return userService.getUser(userEmail, userPassword);
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

    const userService = new UserService();
    const foundUser = userService.findUser(userEmail);
    if ( foundUser === null) {
      userService.createUser(userEmail, userPassword, userNickname);
      return true;
    }
    else {
      console.log("This Email is already in use.");
      return false;
    }

  };
}
