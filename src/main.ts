import {input} from "./library/input";
import * as fs from "node:fs";

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
            else if (userEmail.includes(fs.readFileSync("user.txt").toString()) === false) {
                console.log("Email is already registered.")
                continue
            }
            userPassword = await input("Please enter your password.")
            if(userPassword.length < 4) {
                console.log(" Your Password is too short.")
                continue
            }
            console.log(userEmail,userPassword,userNickname);
            fs.appendFileSync("user.txt",`${userEmail}-${userPassword}-${userNickname}\n`)
            console.log("You are successfully registered.")
            break
        }
        else if ( userSelect === "E") {
            userEmail = await input("Please enter your email.")
            if (userEmail.includes("@") === false) {
                console.log(" Email is wrong.")
                continue
            }
            else if(userEmail.includes(fs.readFileSync("user.txt").toString()) === false) {
                console.log("No Matched user found.")
                continue
            }
            userPassword = await input("Please enter your password.")
            if (userPassword.length < 4) {
                console.log(" Your Password is too short.")
                continue
            }
            else if (userPassword.includes(fs.readFileSync("user.txt").toString()) === false) {
                console.log("No Matched user found.")
                continue
            }
            console.log("log in success!")
            console.log(userEmail,userPassword)
            break
        }
    }
}

appRun()

// const x = fs.readFileSync("user.txt").toString()
// console.log(x.split("\n")[1].split("-")[2])