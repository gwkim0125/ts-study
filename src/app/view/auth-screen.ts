import { UserService } from "../service/user-service";
import { SignInForm } from "./auth/sign-in-form";
import { SignUpForm } from "./auth/sign-up-form";
import { input } from "../library/input";

export class AuthScreen {
  private userService: UserService;
  private signInForm: SignInForm;
  private signUpForm: SignUpForm;

  public constructor(
    userService: UserService,
    signInForm: SignInForm,
    signUpForm: SignUpForm,
  ) {
    this.userService = userService;
    this.signInForm = signInForm;
    this.signUpForm = signUpForm;
  }

  public select = async () => {
    return await input("Press E to Sign in or Press R to Sign Up: ");
  };
  public signIn = async () => {
    const isVerified = await this.signInForm.receiveInput();
    if (!isVerified) {
      return null;
    }

    const user = this.userService.signIn(
      this.signInForm.getEmail(),
      this.signInForm.getPassword(),
    );
    if (user === null) {
      console.log("이메일 또는 비밀번호가 틀렸습니다.");
      return null;
    }

    console.log(`${user.getNickname()}님 환영합니다!`);
    return user;
  };
  public signUp = async () => {
    const isVerified = await this.signUpForm.receiveInput();
    if (!isVerified) {
      return;
    }

    let isSignUpSuccess = this.userService.signUp(
      this.signUpForm.getEmail(),
      this.signUpForm.getPassword(),
      this.signUpForm.getNickname(),
    );
    if (isSignUpSuccess) {
      console.log("Sign up successfull");
    } else {
      console.log("This Email is already in use.");
    }
  };
}
