import { AuthScreen } from "./view/auth-screen";
import { UserDTO } from "./dto/use-dto";
import { MainScreen } from "./view/main-screen";

export class App {
  private authScreen: AuthScreen;
  private mainScreen: MainScreen;
  private user: UserDTO | null;

  public constructor(authScreen: AuthScreen, mainScreen: MainScreen) {
    this.authScreen = authScreen;
    this.mainScreen = mainScreen;
    this.user = null;
  }

  public run = async () => {
    while (true) {
      const authChoice = await this.authScreen.select();
      if (authChoice === "E") {
        this.user = await this.authScreen.signIn();
        if (this.user !== null) {
          // 이 인증 반복문은 벗어나서 아래로 내려가주세요!
          const menuChoice = await this.mainScreen.select();
          if (menuChoice === "1") {
            await this.mainScreen.writeMessage(this.user.getEmail());
          } else if (menuChoice === "2") {
            const messages = await this.mainScreen.loadMessages();
            for (const message of messages) {
              this.mainScreen.printMessage(message);
            }
          }
        }
      } else if (authChoice === "R") {
        await this.authScreen.signUp();
      } else {
        console.log("잘못된 입력입니다.");
      }
    }

    // 메인 메뉴 작업은 인증 반복문이 끝나고 여기에서부터...
  };
}
