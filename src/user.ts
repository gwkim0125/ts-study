export class User {
    private email: string;
    private password: string;
    private nickname: string;

    constructor( email: string, password: string, nickname: string) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }
    setNickname = (newNickname:string) => {
        if(newNickname.trim().length < 10){
            this.nickname = newNickname;
        }
        else {
            console.log("New nickname must be less then 10");
        }
    }
    setEmail= (newEmail:string) => {
        if(newEmail.includes("@") === true) {
            this.email = newEmail;
        }
        else {
            console.log("New email is not valid.");
        }
    }
    setPassword= (newPassword:string) => {
        if(newPassword === this.password) {
            console.log("same password");
        }
        else {
            if(newPassword.length > 10) {
                console.log("new password is too long")
            }
            else {
                this.password = newPassword;
            }
        }
    }
    getNickname = () => {
        return this.nickname;
   }
    getPassword =() => {
        return this.password;
    }
    getEmail= () => {
        return this.email;
    }
}

