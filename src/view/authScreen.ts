import {UserService} from "../service/userService";
import {SignInForm} from "./auth/signInForm";
import {SignUpForm} from "./auth/signUpForm";
import {input} from "../library/input";

export class AuthScreen {
  userService: UserService;
  signInForm: SignInForm;
  signUpForm: SignUpForm;

  constructor(userService: UserService, signInForm: SignInForm, signUpForm: SignUpForm) {
    this.userService = userService;
    this.signInForm = signInForm;
    this.signUpForm = signUpForm;
  }

  selectAuth = async () => {
    return await input(
      "Press E to Sign in or Press R to Sign Up: ",
    );
  }
  signIn = async () => {
    const isVerified = await this.signInForm.receiveInput();
    if (!isVerified) {
      return;
    }

    const user = this.userService.signIn(this.signInForm.getEmail(), this.signInForm.getPassword());
    if (user === null) {
      console.log("Email or Password is Wrong");
    } else {
      console.log(`Log In Successfull! ${user.getNickname()}`);
      process.exit(0);
    }
  }
  signUp = async () => {
    const isVerified = await this.signUpForm.receiveInput();
    if (!isVerified) {
      return;
    }

    let isSignUpSuccess = this.userService.signUp(this.signUpForm.getEmail(), this.signUpForm.getPassword(), this.signUpForm.getNickname());
    if ( isSignUpSuccess === true) {
      console.log("Sign up successfull");
    }
    else {
      console.log("This Email is already in use.");
    }
  }
}