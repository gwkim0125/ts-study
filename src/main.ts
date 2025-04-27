import { input } from "./library/input";
import * as fs from "node:fs";
import { AuthUI } from "./view/authui";
const appRun = async () => {
  const authUI = new AuthUI();
  while (true) {
    let userEmail: string = "";
    let userPassword: string = "";
    let userNickname: string = "";

    const userSelect = await input(
      "Press E to Sign in or Press R to Sign Up: ",
    );
    if (userSelect === "E") {
      const user = await authUI.signIn();
     if (user === null) {
       console.log("Email or Password is Wrong");
     }
     else {
       console.log(`Log In Successfull! ${user.getNickname()}`);
       process.exit(0);
     }

    } else if (userSelect === "R") {
      const signUpResult = await authUI.signUp();
      if (signUpResult === false) {
        console.log("Sign Up Failed, Please try again");
      }
      else {
        console.log("Sign Up Successfull!");
      }
    } else {
      console.log("Wrong input!");
    }
  }
};

appRun();
