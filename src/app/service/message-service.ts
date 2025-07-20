import { MessageRepository } from "../repository/message-repository";
import { UserRepository } from "../repository/user-repository";

export class MessageService {
  private userRepository: UserRepository;
  private messageRepository: MessageRepository;

  constructor(
    userRepository: UserRepository,
    messageRepository: MessageRepository,
  ) {
    this.userRepository = userRepository;
    this.messageRepository = messageRepository;
  }

  writeMessage = (email: string, message: string) => {
    const user = this.userRepository.findUser(email);
    if (user === null) {
      return false;
    }

    this.messageRepository.createMessage(email, message);
    return true;
  };
}
