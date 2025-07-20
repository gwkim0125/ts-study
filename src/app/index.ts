import { TextDatabase } from "./data/text-database";
import { UserService } from "./service/user-service";
import { SignInForm } from "./view/auth/sign-in-form";
import { SignUpForm } from "./view/auth/sign-up-form";
import { AuthScreen } from "./view/auth-screen";
import { App } from "./app";
import { UserRepository } from "./repository/user-repository";
import { CsvDatabase } from "./data/csv-database";
import { MainScreen } from "./view/main-screen";
import { MessageService } from "./service/message-Service";
import { MessageForm } from "./view/message/message-form";
import { MessageRepository } from "./repository/message-repository";

const txtDatabase = new TextDatabase();
const csvDatabase = new CsvDatabase();
const userRepository = new UserRepository(txtDatabase);
const messageRepository = new MessageRepository(txtDatabase);
const userService = new UserService(userRepository);
const signInForm = new SignInForm();
const signUpForm = new SignUpForm();
const messageForm = new MessageForm();
const messageService = new MessageService(messageRepository);
const authScreen = new AuthScreen(userService, signInForm, signUpForm);
const mainScreen = new MainScreen(messageForm, messageService);
const app = new App(authScreen, mainScreen, messageRepository);

app.run();

// 객체 지향 프로그래밍: 크고 복잡한 소프트웨어를 유지, 보수하기 위한 설계 원칙

// 객체 지향 프로그래밍의 목표: 분업, 협업

// 객체 지향 프로그래밍 4대 특성
// 1. 추상화
// 2. 캡슐화
// 3. 상속
// 4. 다형성

// 객체 지향 프로그래밍 5대 원칙
// 1. 단일 책임의 원칙
// 2. 개방 폐쇄의 원칙
// 3. 의존성 역전의 원칙
// 4. 인터페이스 분리의 원칙
// 5. 리스코프 치환의 원칙
