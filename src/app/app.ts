import { AuthScreen } from "./view/auth-screen";
import { UserDTO } from "./dto/use-dto";

export class App {
  private user: UserDTO | undefined;
  private authScreen: AuthScreen;

  public constructor(authScreen: AuthScreen) {
    this.authScreen = authScreen;
  }

  public run = async () => {
    while (true) {
      const userSelect = await this.authScreen.selectAuth();
      if (userSelect === "E") {
        this.user = await this.authScreen.signIn();
        if (this.user) {
          console.log(`로그인 성공: ${this.user.getNickname()}`);
        }
      } else if (userSelect === "R") {
        await this.authScreen.signUp();
      } else {
        console.log("Wrong input!");
      }
    }
  };
}
