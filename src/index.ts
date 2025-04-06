import { User } from "./user";
import { input } from "./library/input";

// const user1 = new User("user1@gmail.com", "user1", "user1")
// const user2 = new User("user2@gmail.com", "user2", "user2")
// const user3 = new User("user3@gmail.com", "user3", "user3")
//
// console.log(user1.getEmail())
// user1.setNickname("peter")
// console.log(user1.getNickname())
// user1.setNickname("asfpdhadlkfjhpha")
// user1.setEmail("asfpdhadlkfjhpha")
// user1.setPassword("1234")

//인증
const app = async () => {
  while (true) {
    let userPassword: string = "";
    let userEmail: string = "";
    let userNickname: string = "";
    const userSelect: string = await input(
      "Press E to Sign In or Press R to Sign Up: ",
    );
    if (userSelect === "E") {
      userEmail = await input("Please enter your email: ");
      userPassword = await input("Please enter your password: ");
      console.log(userEmail, userPassword);
      break;
    } else if (userSelect === "R") {
      userNickname = await input("Please enter your nickname: ");
      userEmail = await input("Please enter your email: ");
      userPassword = await input("Please enter your password: ");
      console.log(userNickname, userEmail, userPassword);
      break;
    } else {
      console.log("Wrong Input");
    }
  }
};

app();
