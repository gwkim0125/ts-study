import { Database } from "./data/database";
import { UserService } from "./service/userService";
import { SignInForm } from "./view/auth/signInForm";
import { SignUpForm } from "./view/auth/signUpForm";
import { AuthScreen } from "./view/authScreen";
import { App } from "./app";
import { UserRepository } from "./repository/userRepository";

const dataBase = new Database();
const userRepository = new UserRepository(dataBase);
const userService = new UserService(userRepository);
const signInForm = new SignInForm();
const signUpForm = new SignUpForm();
const authScreen = new AuthScreen(userService, signInForm, signUpForm);
const app = new App(authScreen);

app.run();
