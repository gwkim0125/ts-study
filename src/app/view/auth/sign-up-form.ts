import { input } from "../../library/input";
import fs from "node:fs";
import { UserService } from "../../service/user-service";
import { SignInForm } from "./sign-in-form";

export class SignUpForm {
  private email: string;
  private password: string;
  private nickname: string;

  public constructor() {
    this.email = "";
    this.password = "";
    this.nickname = "";
  }

  public receiveInput = async () => {
    this.email = await input("Please enter your email: ");
    if (!this.email.includes("@")) {
      console.log("Email is wrong.");
      return false;
    }

    this.password = await input("Please enter your password: ");
    if (this.password.length < 4) {
      console.log("Your Password is too short.");
      return false;
    }

    this.nickname = await input("Please enter your Nickname: ");

    return true;
  };
  public getEmail = () => {
    return this.email;
  };
  public getPassword = () => {
    return this.password;
  };
  public getNickname = () => {
    return this.nickname;
  };
}
