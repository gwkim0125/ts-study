import { input } from "../../library/input";

export class SignInForm {
  private email: string;
  private password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }

  receiveInput = async () => {
    this.email = await input("Please enter your email: ");
    if (this.email.includes("@") === false) {
      console.log("Email is wrong.");
      return false;
    }

    this.password = await input("Please enter your password: ");
    if (this.password.length < 8) {
      console.log("Your Password is too short.");
      return false;
    }

    return true;
  };
  getEmail = () => {
    return this.email;
  };
  getPassword = () => {
    return this.password;
  };
}
