import {input} from "../library/input";
import {MessageForm} from "./message/message-form";
import {MessageService} from "../service/message-Service";

export class MainScreen {
    private messageForm: MessageForm;
    private messageService: MessageService;

    constructor(messageForm: MessageForm, messageService: MessageService) {
        this.messageForm = messageForm;
        this.messageService = messageService;
    }
    public selectMenu = async () => {
        return await input("Press 1 to Write Message or Press 2 to Load Messages: ");
    };
    public writeMessage = async () => {
        const isFormCorrect = await this.messageForm.receiveInput();
        if (!isFormCorrect) {
            return;
        }

        let isMessageSuccess = this.messageService.writeMessage(
            this.messageForm.getMessage()
        );


        if (isMessageSuccess) {
            console.log("Your Message is Successfully saved!");
        } else {
            console.log("Your Message is Not correct!");
        };
    }
}