import { User } from "./entity/user";
import {AuthScreen} from "./view/authScreen";

export class App {
  user: User | null;
  authScreen: AuthScreen;

  constructor(authScreen: AuthScreen) {
    this.user = null;
    this.authScreen = authScreen;
  }

  run = async () => {
    while (true) {
      const userSelect = await this.authScreen.selectAuth();
      if (userSelect === "E") {
        this.user = await this.authScreen.signIn();
        if (this.user === null) {
          console.log("Email or Password is Wrong");
        } else {
          console.log(`Log In Successfull! ${this.user.getNickname()}`);
          process.exit(0);
        }
      } else if (userSelect === "R") {
        this.user = await this.authScreen.signUp();
        if (this.user === null) {
          console.log("Sign Up Failed, Please try again");
        } else {
          console.log(`Sign Up Successfull! ${this.user.getNickname()}`);
        }
      } else {
        console.log("Wrong input!");
      }
    }
  };
}
