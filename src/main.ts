import { input } from "./library/input";
import * as fs from "node:fs";

const appRun = async () => {
  while (true) {
    let userEmail: string = "";
    let userPassword: string = "";
    let userNickname: string = "";

    const userSelect = await input(
      "Press E to Sign in or Press R to Sign Up: ",
    );
    if (userSelect === "E") {
      userEmail = await input("Please enter your email: ");
      if (userEmail.includes("@") === false) {
        console.log("Email is wrong.");
        continue;
      }

      userPassword = await input("Please enter your password: ");
      if (userPassword.length < 4) {
        console.log("Your Password is too short.");
        continue;
      }

      const userTextData = fs.readFileSync("user.txt").toString();
      const userDataRows = userTextData.split("\n");
      for (let i = 0; i < userDataRows.length; i++) {
        const userProfile = userDataRows[i].split(", ");
        if (userProfile[0] === userEmail && userProfile[1] === userPassword) {
          console.log(`Welcome ${userProfile[2]}!`);
          process.exit(0);
        }
      }

      console.log("Email or Password is Wrong!");
    } else if (userSelect === "R") {
      userEmail = await input("Please enter your email: ");
      if (userEmail.includes("@") === false) {
        console.log("Email is wrong.");
        continue;
      }

      userPassword = await input("Please enter your password: ");
      if (userPassword.length < 4) {
        console.log("Your Password is too short.");
        continue;
      }

      userNickname = await input("Please enter your Nickname: ");

      const userTextData = fs.readFileSync("user.txt").toString();
      const userDataRows = userTextData.split("\n");
      let isFoundEmail = false;
      for (let i = 0; i < userDataRows.length; i++) {
        const userProfile = userDataRows[i].split(", ");
        if (userProfile[0] === userEmail) {
          isFoundEmail = true;
          console.log("This Email is already registered.");
          break;
        }
      }

      if (isFoundEmail === true) {
        continue;
      }

      fs.appendFileSync(
        "user.txt",
        `${userEmail}, ${userPassword}, ${userNickname}\n`,
      );
      console.log("You are successfully registered.");
    } else {
      console.log("Wrong input!");
    }
  }
};

appRun();
