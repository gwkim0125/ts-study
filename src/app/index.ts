import { TextDatabase } from "./data/text-database";
import { UserService } from "./service/user-service";
import { SignInForm } from "./view/auth/sign-in-form";
import { SignUpForm } from "./view/auth/sign-up-form";
import { AuthScreen } from "./view/auth-screen";
import { App } from "./app";
import { UserRepository } from "./repository/user-repository";
import { CsvDatabase } from "./data/csv-database";

const txtDatabase = new TextDatabase();
const csvDatabase = new CsvDatabase();
const userRepository = new UserRepository(txtDatabase);
const userService = new UserService(userRepository);
const signInForm = new SignInForm();
const signUpForm = new SignUpForm();
const authScreen = new AuthScreen(userService, signInForm, signUpForm);
const app = new App(authScreen);

app.run();
