import fs from "node:fs";
import { UserEntity } from "../entity/userEntity";
import { Database } from "../data/database";
import { UserRepository } from "../repository/userRepository";
import {UserDTO} from "../dto/userDTO";

export class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  signIn = (email: string, password: string) => {
    const userList = this.userRepository.getUsers();
    for (let i = 0; i < userList.length; i++) {
      const user = userList[i];

      if (user.getEmail() === email && user.getPassword() === password) {
        return new UserDTO(user.getNickname());
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
