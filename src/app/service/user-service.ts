import { UserRepository } from "../repository/user-repository";
import { UserDTO } from "../dto/use-dto";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  signIn = (email: string, password: string) => {
    const userList = this.userRepository.getUsers();
    for (let i = 0; i < userList.length; i++) {
      const user = userList[i];

      if (user.getEmail() === email && user.getPassword() === password) {
        return new UserDTO(user.getEmail(), user.getNickname());
      }
    }
    return null;
  };

  signUp = (email: string, password: string, nickname: string) => {
    const userList = this.userRepository.getUsers();
    for (let i = 0; i < userList.length; i++) {
      const user = userList[i];

      if (user.getEmail() === email) {
        return false;
      }
    }
    this.userRepository.createUser(email, password, nickname);
    return true;
  };
}
