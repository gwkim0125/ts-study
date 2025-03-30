import {input} from "./library/input";
import * as fs from "node:fs";
import {log} from "node:util";

export const appRun = async () => {
    while(true) {
        let userNickname = "";
        let userPassword = "";
        let userEmail = "";
        const userSelect = await input(" Press E to Sign in or Press R to Sign Up.")
        if (userSelect === "R") {
            userNickname = await input("Please enter your Nickname.")
            userEmail = await input("Please enter your email.")
            if (userEmail.includes("@") === false) {
                console.log(" Email is wrong.")
                continue
            }
            userPassword = await input("Please enter your password.")
            if(userPassword.length < 4) {
                console.log(" Your Password is too short.")
                continue
            }
            console.log(userEmail,userPassword,userNickname);
            fs.appendFileSync("user.txt",`${userEmail}-${userPassword}-${userNickname}\n`)
            break
        }
        else if ( userSelect === "E") {
            userEmail = await input("Please enter your email.")
            if (userEmail.includes("@") === false) {
                console.log(" Email is wrong.")
                continue
            }
            userPassword = await input("Please enter your password.")
            if (userPassword.length < 4) {
                console.log(" Your Password is too short.")
                continue
            }
           const contents = fs.readFileSync("user.txt").toString()
            console.log(contents)
            break
        }
    }
}

// appRun()
const x = fs.readFileSync("user.txt").toString()
console.log(x.split("\n")[1].split("-")[2])