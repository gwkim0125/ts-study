export class User {
    private email: string;
    private password: string;
    private nickname: string;

    constructor(email:string, password:string, nickname:string)  {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }
    getNickname() {
        return this.nickname;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
}