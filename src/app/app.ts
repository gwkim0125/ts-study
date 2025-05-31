import { AuthScreen } from "./view/authScreen";
import { UserDTO } from "./dto/userDTO";
import { GameScreen } from "./view/gameScreen";

export class App {
  private user: UserDTO | undefined;
  private authScreen: AuthScreen;
  private gameScreen: GameScreen;

  public constructor(authScreen: AuthScreen, lobbyScreen: GameScreen) {
    this.authScreen = authScreen;
    this.gameScreen = lobbyScreen;
  }

  public run = async () => {
    while (true) {
      const userSelect = await this.authScreen.selectAuth();
      if (userSelect === "E") {
        this.user = await this.authScreen.signIn();
        if (this.user) {
          this.gameScreen.initLobby(this.user);
          this.gameScreen.play();
        }
      } else if (userSelect === "R") {
        await this.authScreen.signUp();
      } else {
        console.log("Wrong input!");
      }
    }
  };
}
