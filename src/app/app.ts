import { AuthScreen } from "./view/auth-screen";
import { UserDTO } from "./dto/use-dto";
import { MainScreen } from "./view/main-screen";

export class App {
  private user: UserDTO | undefined;
  private authScreen: AuthScreen;
  private mainScreen: MainScreen;

  public constructor(authScreen: AuthScreen, mainScreen: MainScreen) {
    this.authScreen = authScreen;
    this.mainScreen = mainScreen;
  }

  public run = async () => {
    while (true) {
      const userSelect = await this.authScreen.selectAuth();
      if (userSelect === "E") {
        this.user = await this.authScreen.signIn();
        console.log(this.user);
        if (this.user) {
          console.log(`로그인 성공: ${this.user.getNickname()}`);

          const userMenuSelect = await this.mainScreen.selectMenu();
          if (userMenuSelect === "1") {
            console.log("Write Your Message")
          }
          else if (userMenuSelect === "2") {
            console.log("Load Your Messages")
          }
        }
      } else if (userSelect === "R") {
        await this.authScreen.signUp();
      } else {
        console.log("Wrong input!");
      }
    }
  };
}
