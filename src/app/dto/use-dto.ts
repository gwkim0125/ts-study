export class UserDTO {
  private email: string;
  private nickname: string;

  constructor(email: string, nickname: string) {
    this.email = email;
    this.nickname = nickname;
  }

  getEmail() {
    return this.email;
  }
  getNickname() {
    return this.nickname;
  }
}
