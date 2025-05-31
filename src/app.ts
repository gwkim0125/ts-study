import { UserEntity } from "./entity/userEntity";
import { AuthScreen } from "./view/authScreen";

export class App {
  user: UserEntity | null;
  authScreen: AuthScreen;

  constructor(authScreen: AuthScreen) {
    this.user = null;
    this.authScreen = authScreen;
  }

  run = async () => {
    while (true) {
      const userSelect = await this.authScreen.selectAuth();
      if (userSelect === "E") {
        await this.authScreen.signIn();
      } else if (userSelect === "R") {
        await this.authScreen.signUp();
      } else {
        console.log("Wrong input!");
      }
    }
  };
}
