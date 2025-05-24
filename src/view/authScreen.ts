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
      return null;
    }

    return this.userService.getUser(this.signInForm.getEmail(), this.signInForm.getPassword());
  }
  signUp = async () => {
    const isVerified = await this.signUpForm.receiveInput();
    if (!isVerified) {
      return null;
    }

    let user = this.userService.findUser(this.signUpForm.getEmail());
    if ( user === null) {
      user = this.userService.createUser(this.signUpForm.getEmail(), this.signUpForm.getPassword(), this.signUpForm.getNickname());
      return user;
    }
    else {
      console.log("This Email is already in use.");
      return null;
    }
  }
}