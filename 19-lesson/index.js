// setInterval

// let time = 0;
// let timer = setInterval(() => {
//     console.log(++time);
//     if(time === 5){
//         clearInterval(timer);
//     }
// }, 1000);

// Advansed function
// function sayHello(name, age) {
//   console.log("Hi", this, name, age);
// }

// let john = {
//   name: "John",
//   age: 23,
// };

// bind()

// sayHello.bind(john)();

// call()

// sayHello.call(john);

// apply()

// sayHello.apply(john, [john.name, john.age]);

// let user1 = {
//   login: "usr1",
//   pass: 123,
// };
// let user2 = {
//   login: "usr2",
//   pass: 456,
// };
// let user3 = {
//   login: "usr3",
//   pass: 789,
// };
// const showDetails = function () {
//   console.log(this.login, this.pass);
// };
// showDetails.call(user1);
// showDetails.call(user2);
// showDetails.call(user3);
