import { MessageRepository } from "../repository/message-repository";

export class MessageService {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  writeMessage = (message: string) => {
    this.messageRepository.createMessage(message);
    return true;
  };
}
