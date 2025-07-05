import {input} from "../library/input";
import {MessageForm} from "./message/message-form";

export class MainScreen {
    private messageForm: MessageForm;

    constructor(messageForm: MessageForm) {
        this.messageForm = messageForm;
    }
    public selectMenu = async () => {
        return await input("Press 1 to Write Message or Press 2 to Load Messages: ");
    };
    public writeMessage = async () => {
        const isFormCorrect = await this.messageForm.receiveInput();
        if (!isFormCorrect) {
            return;
        }

        const message = this.messageService.writeMessage(
            this.messageForm.getMessage()
        )
    }
}