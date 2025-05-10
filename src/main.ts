import { input } from "./library/input";
import { AuthUI } from "./view/authui";
import { User } from "./entity/user";
import {UserService} from "./service/userService";
import {Database} from "./data/database";

class App {
  authUI: AuthUI;
  user: User | null;

  constructor(authUI: AuthUI) {
    this.authUI = authUI;
    this.user = null;
  }

  run = async () => {
    while (true) {
      const userSelect = await input(
        "Press E to Sign in or Press R to Sign Up: ",
      );
      if (userSelect === "E") {
        this.user = await this.authUI.signIn();
        if (this.user === null) {
          console.log("Email or Password is Wrong");
        } else {
          console.log(`Log In Successfull! ${this.user.getNickname()}`);
          process.exit(0);
        }
      } else if (userSelect === "R") {
        const signUpResult = await this.authUI.signUp();
        if (signUpResult === false) {
          console.log("Sign Up Failed, Please try again");
        } else {
          console.log("Sign Up Successfull!");
        }
      } else {
        console.log("Wrong input!");
      }
    }
  };
}
const dataBase = new Database();
const userService = new UserService(dataBase);
const authUI = new AuthUI(userService);
const app = new App(authUI);
app.run();
