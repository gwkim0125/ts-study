import { input } from "./library/input";
import * as fs from "node:fs";

export const appRun = async () => {
  while (true) {
    let userNickname = "";
    let userPassword = "";
    let userEmail = "";
    const userSelect = await input(
      " Press E to Sign in or Press R to Sign Up.",
    );
    if (userSelect === "R") {
      userNickname = await input("Please enter your Nickname.");
      userEmail = await input("Please enter your email.");
      if (userEmail.includes("@") === false) {
        console.log(" Email is wrong.");
        continue;
      }
      userPassword = await input("Please enter your password.");
      if (userPassword.length < 4) {
        console.log(" Your Password is too short.");
        continue;
      }

      const text = fs.readFileSync("user.txt").toString();
      const rows = text.split("\n");
      let isFoundEmail = false;
      for (let i = 0; i < rows.length; i++) {
        const userProfile = rows[i].split(", ");
        if (userProfile[0] === userEmail) {
          console.log(" This Email is already registered.");
          isFoundEmail = true;
          break;
        }
      }
      if (isFoundEmail === true) {
        continue;
      }
      console.log(userEmail, userPassword, userNickname);
      fs.appendFileSync(
        "user.txt",
        `${userEmail}, ${userPassword}, ${userNickname}\n`,
      );
      console.log("You are successfully registered.");
      break;
    } else if (userSelect === "E") {
      userEmail = await input("Please enter your email.");
      if (userEmail.includes("@") === false) {
        console.log(" Email is wrong.");
        continue;
      }

      userPassword = await input("Please enter your password.");
      if (userPassword.length < 4) {
        console.log(" Your Password is too short.");
        continue;
      }
      const text = fs.readFileSync("user.txt").toString();
      const rows = text.split("\n");
      // 1. 첫번째 줄을 쉼표로 자른다
      // 2. 쉼표로 잘라서 생긴 배열에 존재하는 원소 중 첫번쨰 원소와 이메일이 일치하는지 확인한다
      // 3. 이메일이 일치한다면 비밀번호또한 일치하는지 확인한다.
      // 3-1. 비밀번호가 불일치한다면 다시 이메일과 비밀번호를 입력받는다.
      // 4. 일치한다면 이 배열의 세번째 원소를 출력하고 로그인이 성공되었음을 알리고 프로그램을 종료한다
      // 4. 이 배열의 첫번째 원소와 이메일이 일치하지 않는다면 다음 줄로 넘어가서 2,3번을 반복한다
      for (let i = 0; i < rows.length; i++) {
        const userProfile = rows[i].split(", ");
        if (userProfile[0] === userEmail && userProfile[1] === userPassword) {
          console.log(`${userProfile[2]}, log in success`);
          process.exit(0);
        }
      }
      console.log(" Email or Password is Wrong.");
    }
  }
};

appRun();

// const x = fs.readFileSync("user.txt").toString()
// console.log(x.split("\n")[1].split("-")[2])
