import { UserRepository } from "../repository/userRepository";
import { UserDTO } from "../dto/userDTO";
import { PlayerDTO } from "../dto/playerDTO";

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

  loadPlayer = (email: string) => {
    return new PlayerDTO(email);
  };
  createPlayer = (email: string) => {
    return new PlayerDTO(email);
  };
}
