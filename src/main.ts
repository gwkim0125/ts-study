import {Database} from "./data/database";
import {UserService} from "./service/userService";
import {SignInForm} from "./view/auth/signInForm";
import {SignUpForm} from "./view/auth/signUpForm";
import {AuthScreen} from "./view/authScreen";
import {App} from "./app";

const dataBase = new Database();
const userService = new UserService(dataBase);
const signInForm = new SignInForm();
const signUpForm = new SignUpForm();
const authScreen = new AuthScreen(userService, signInForm, signUpForm);
const app = new App(authScreen);

app.run();