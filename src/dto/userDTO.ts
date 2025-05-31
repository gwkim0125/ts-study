export class UserDTO {
    private nickname: string;

    constructor( nickname: string) {
        this.nickname = nickname;
    }

    getNickname () {
        return this.nickname;
    }
}