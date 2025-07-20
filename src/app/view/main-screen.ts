import { input } from "../library/input";
import { MessageForm } from "./message/message-form";
import { MessageService } from "../service/message-service";

export class MainScreen {
  private messageForm: MessageForm;
  private messageService: MessageService;

  constructor(messageForm: MessageForm, messageService: MessageService) {
    this.messageForm = messageForm;
    this.messageService = messageService;
  }
  public select = async () => {
    return await input("[1] 메세지 작성, [2] 메세지 불러오기, [3] 프로그램 종료하기: ");
  };
  public writeMessage = async (email: string) => {
    const isFormCorrect = await this.messageForm.receiveInput();
    if (!isFormCorrect) {
      return;
    }

    const isSuccessWrite = this.messageService.writeMessage(
      email,
      this.messageForm.getMessage(),
    );

    if (isSuccessWrite) {
      console.log("Your Message is Successfully saved!");
    } else {
      console.log("Your Message is Not correct!");
    }

    return;
  };
  public loadMessages = async () => {
    return [];
  };
  public printMessage = (message: any) => {};
}
