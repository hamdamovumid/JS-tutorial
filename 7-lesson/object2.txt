// Object

// Literal

let user1 = {
    name: "Umid",
    age: 22,
    status: "Student",
    country: "Uzbekistan"
}

// Constructor

let user2 = new Object({
    name: "Umar",
    age: 25,
    status: "Student",
    country: "Uzbekistan"
})

// Accessing
// Static way
// let key = "age"
// console.log(user1.key);
// console.log(user1.age);
// console.log(user2.age);

// Dynamic
// let key = "age"
// console.log(user1[key]);


// let title = "name";

// let user3 = {
//     name: "Umar",
//     title: "Student"
// }

// console.log(user3[title]);

// Abbriviation

// let name = "Umar";
// let title = "Student";

// let user4 = {
//     name,
//     title
// }

// console.log(user4);

// Change
// let title = "name"

// let student = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// student.age = 24;
// student[title] = "Umar";
// console.log(student);

// Delete

// let student = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// delete student.course;
// console.log(student);

// Key and vakue create
// let student = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// student.country = "Uzbekistan";
// console.log(student);

// Object freeze

// let student = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// Object.freeze(student);

// student.name = "Umar";
// delete student.course;

// console.log(student);

// Object seal

// let student = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// Object.seal(student);

// student.name = "Umar"; // true
// delete student.course; // false
// student.country = "Uzbekistan"; // false

// console.log(student);

// Clone 
// Deep copy: structuredClone() => object'ni object'ga copy qilishda eng ideal 
// Shallow copy

// let object1 = {name: "Umid"};
// let object2 = {name: "Umid"};
// object1.name = "Umar";

// object2 = structuredClone(object1); 

// console.log(object1);
// console.log(object2);

// In => Object'ni ichida bizga kerakli key bormi yo'qmi shuni tekshiradi. 

// let student = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// console.log("name" in student);

// For in => Object'ni itiratsiya qilish uchun ishlatiladi. 
// Quyidagi misolda key nomli o'zgaruvchiga name, age, course'ning qiymatlari birlashadi va console'ga chiqadi

// let student = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// for(let key in student){
//     console.log(key); // name, age, course
//     console.log(student[key]); // "Umid", 22, 3
// }

// Object assign => object'ni object'ga qo'shish (Shallow copy)

// let student1 = {
//     name: "Umid",
//     age: 22,
//     course: 3
// }

// let student2 = {
//     country: "Uzb",
//     school: "WBA",
//     adress: "Sebzor"
// }

// let user = {};

// Object.assign(student1, student2); // Student1 ni Student2 ga qo'shayapti
// Object.assign(user, student1, student2); // Student1 bilan Student2 ni user ga qo'shayapti

// console.log(student1);

// Object in function
// 1-usul
// let triangle = {
//     tomon: 20,
//     balandlik: 15,
//     yuza: function(){
//         console.log(triangle.tomon * triangle.balandlik / 2);
//     }
// }

// triangle.yuza();

// 2-usul
// let triangle = {
//     tomon: 20,
//     balandlik: 15,
//     yuza: () => {
//         console.log(triangle.tomon * triangle.balandlik / 2);
//     }
// }

// triangle.yuza();

// 3-usul
// let triangle = {
//     tomon: 20,
//     balandlik: 15,
//     yuza() {
//         console.log(triangle.tomon * triangle.balandlik / 2);
//     }
// }

// triangle.yuza();