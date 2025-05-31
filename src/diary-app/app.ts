import { AuthScreen } from "./view/authScreen";

export class App {
  private authScreen: AuthScreen;

  public constructor(authScreen: AuthScreen) {
    this.authScreen = authScreen;
  }

  public run = async () => {
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
