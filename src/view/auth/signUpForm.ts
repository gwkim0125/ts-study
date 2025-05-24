import { input } from "../../library/input";
import fs from "node:fs";
import { UserService } from "../../service/userService";
import {SignInForm} from "./signInForm";

export class SignUpForm {
  private email: string;
  private password: string;
  private nickname: string;

  constructor() {
    this.email = "";
    this.password = "";
    this.nickname = "";
  }

  receiveInput = async () => {
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

    return true;
  };
  getEmail = () => {
    return this.email;
  }
  getPassword = () => {
    return this.password;
  }
  getNickname = () => {
    return this.nickname;
  }
}
