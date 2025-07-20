
import {input} from "../../library/input";

export class MessageForm {
    private message: string;

    public constructor() {
        this.message = "";
    }

    receiveInput = async () => {
        this.message = await input("Please enter your message: ");
        if (this.message.length > 30) {
            console.log("메세지는 30자이하여야합니다");
            return false
        }
        return true;

    }
    public getMessage = () => {
        return this.message;
    }
}