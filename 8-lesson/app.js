// Garbage collection

// let person = {
//     login: "abc",
//     pass: 345,
//     status: "student"
// }

// person = 11;

// console.log(person.login);

// This

// let object = {
//     name: "WBA",
//     pass: 123,
//     getInfo(){
//         console.log(`${this.name} user paroli: ${this.pass}`);
//     }
// }

// let object2 = {};

// Object.assign(object2, object);
// object = null;
// object2.getInfo();

// Destructure => qayta qurish

// let name = "Umar";
// let object = {
//     name: "Umid",
//     age: 22,
//     interesting: "art",
//     status: "Student",
//     info: {
//         heigth: 189,
//         width: 25,
//     }
// }

// let {name: ism, age, interesting, info: {heigth, width}} = object;
// console.log(ism, age, interesting, heigth, width);

// Spread operator ... => shallow copy

// let object = {
//     name: "Umid",
//     age: 22,
//     interesting: "art",
//     status: "Student",
//     info: {
//         heigth: 189,
//         width: 25,
//     }
// }

// let object2 = {...object, age: 25}

// console.log(object);

// Optional chaning => (?)

// let object = {
//     name: "Umid",
//     age: 22,
//     interesting: "art",
//     status: "Student",
//     info: {
//         heigth: 189,
//         width: 25,
//     }
// }

// console.log(object.firstName?.age.info);