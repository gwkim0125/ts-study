import {User} from "./user";

const user1 = new User("user1@gmail.com", "user1", "user1")
const user2 = new User("user2@gmail.com", "user2", "user2")
const user3 = new User("user3@gmail.com", "user3", "user3")

console.log(user1.getEmail())
user1.setNickname("peter")
console.log(user1.getNickname())
user1.setNickname("asfpdhadlkfjhpha")
user1.setEmail("asfpdhadlkfjhpha")
user1.setPassword("1234")
