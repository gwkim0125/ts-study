import { UserService } from "../service/userService";
import { UserDTO } from "../dto/userDTO";

export class GameScreen {
  private user: UserDTO | undefined;
  private userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }

  initLobby(user: UserDTO) {
    this.user = user;
    const player = this.userService.loadPlayer(this.user.getEmail());
    if (player) {
      // 있다면 > 캐릭터 정보 로딩
      console.log();
    } else {
      // 없다면 > 캐릭터 하나 생성 후 로딩
      this.userService.createPlayer(this.user.getEmail());
    }
  }
  play() {
    // 숫자 1을 누르면 공격: 크리티컬 공격: 데미지 2배 or 일반 공격
    // 공격 후 매 번 몬스터의 체력이 표시된다.
    // 몬스터가 최종적으로 사망하면 레벨 업(공격력 10 증가, 체력 5 증가, 방어력 5 증가)
  }
}
