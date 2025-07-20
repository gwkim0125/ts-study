import { UserRepository } from "../repository/user-repository";
import { UserDTO } from "../dto/use-dto";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  signIn = (email: string, password: string) => {
    const user = this.userRepository.findUser(email);
    if (user === null) {
      return null;
    }
    if (user.getPassword() !== password) {
      return null;
    }

    return new UserDTO(user.getEmail(), user.getNickname());
  };
  signUp = (email: string, password: string, nickname: string) => {
    const user = this.userRepository.findUser(email);
    if (user !== null) {
      return false;
    }

    return this.userRepository.createUser(email, password, nickname);
  };
}
