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
    if (!this.email.includes("@")) {
      console.log("Email is wrong.");
      return false;
    }

    this.password = await input("Please enter your password: ");
    if (this.password.length < 4) {
      console.log("Your Password is toto short.");
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
