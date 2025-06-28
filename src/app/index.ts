import { TextDatabase } from "./data/textDatabase";
import { UserService } from "./service/userService";
import { SignInForm } from "./view/auth/signInForm";
import { SignUpForm } from "./view/auth/signUpForm";
import { AuthScreen } from "./view/authScreen";
import { App } from "./app";
import { UserRepository } from "./repository/userRepository";
import { GameScreen } from "./view/gameScreen";
import {CsvDatabase} from "./data/csvDatabase";
import {PdfDatabase} from "./data/pdfDatabase";

const txtdatabase = new TextDatabase();
const csvdatabase = new CsvDatabase();
const pdfdatabase = new PdfDatabase();
const userRepository = new UserRepository(pdfdatabase);
const userService = new UserService(userRepository);
const signInForm = new SignInForm();
const signUpForm = new SignUpForm();
const authScreen = new AuthScreen(userService, signInForm, signUpForm);
const lobbyScreen = new GameScreen(userService);
const app = new App(authScreen, lobbyScreen);

app.run();
