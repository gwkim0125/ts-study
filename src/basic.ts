// // 데이터관리
// const email: string = "admin@gmail.com";
// const nickname: string = "admin";
// const password: number = 1234;
// const isAdult: boolean = true
// console.log(`내 이메일은 ${email}이고, 내 닉네임은 ${nickname}이다.`)
//
// const email2: string= "admin2@gmail.com";
// const nickname2: string = "admin2";
// const password2: number = 5678;
// const isAdult2: boolean = true
// console.log(`내 이메일은 ${email2}이고, 내 닉네임은 ${nickname2}이다.`)
// type TUser = {email: string, nickname: string, password: number, isAdult: boolean}
// const user1: TUser = {
//     email: "admin@gmail.com",
//     nickname: "admin",
//     password: 1234,
//     isAdult: true
// }
//
// const user2: TUser = {
//     email: "admin2@gmail.com",
//     nickname: "admin2",
//     password: 5678,
//     isAdult: false
// }
//
// console.log(`내 이메일은 ${user2.email}이고, 내 닉네임은 ${user2.nickname}이다.`)
// console.log(`내 이메일은 ${user1.email}이고, 내 닉네임은 ${user1.nickname}이다.`)
//
//
// const users:TUser[] = []
// users.push(user1)
// users.push(user2)
// console.log(`내 이메일은 ${users[0].email}이고, 내 닉네임은 ${users[0].nickname}이다. 나는 성인이다.`)
// console.log(`내 이메일은 ${users[1].email}이고, 내 닉네임은 ${users[1].nickname}이다. 나는 성인이 아니다.`)
//
// // 연산자
// const testName: string = "김" + "건" + "우";
// console.log(testName)
// let testNumber: number = 1
// testNumber = testNumber + 1
// console.log(testNumber)
// testNumber += 1
// testNumber++
// console.log(testNumber)
//
//
// // 조건문
// if (users[0].isAdult === true) {
//     console.log(`내 이메일은 ${users[0].email}이고, 내 닉네임은 ${users[0].nickname}이다. 나는 성인이다.`)
// } else {
//     console.log(`내 이메일은 ${users[0].email}이고, 내 닉네임은 ${users[0].nickname}이다. 나는 성인이 아니다.`)
// }
//
// if (users[1].isAdult === true) {
//     console.log(`내 이메일은 ${users[1].email}이고, 내 닉네임은 ${users[1].nickname}이다. 나는 성인이다.`)
// } else {
//     console.log(`내 이메일은 ${users[1].email}이고, 내 닉네임은 ${users[1].nickname}이다. 나는 성인이 아니다.`)
// }
//
//
// // 함수
// const addOne = (x:number) => {
//     x += 1
//     return x
// }
// const y = addOne(100)
// console.log(y)
//
// const makeProfile = (user:TUser) => {
//     if (user.isAdult === true) {
//         return `내 이메일은 ${user.email}이고, 내 닉네임은 ${user.nickname}이다. 나는 성인이다.`
//     } else {
//         return `내 이메일은 ${user.email}이고, 내 닉네임은 ${user.nickname}이다. 나는 성인이 아니다.`
//     }
// }
//
// console.log(makeProfile(users[0]))
// console.log(makeProfile(users[1]))
//
//
// // 반복문
// let i = 0
// while (i < 101) {
//     console.log(i)
//     i += 1
// }
//
// let j = 1
// let sum = 0
// while (j < 11) {
//     sum += j
//     j += 1
// }
// console.log(sum)
//
// for (let i = 0; i < 11; i += 2) {
//     console.log(i)
// }
//
// let k = 0
// while (k < users.length) {
//     console.log(makeProfile(users[k]))
//     k += 1
// }
//
// let P = 0
// while (P < 9) {
//     P += 1
//     console.log(`3 X ${P} = ${3 * P}`)
// }
//
// // 객체지향 프로그래밍
//
//
//
//
//
//
