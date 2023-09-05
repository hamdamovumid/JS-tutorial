// Task

const person = {
  name: "GrandFather",
  age: 90,
  child: {
    name: "Father",
    age: 50,
    child: {
      name: "Son",
      age: 25,
      child: {
        name: "Kid",
        age: 1,
      },
    },
  },
};

// Sample 1
// const calcAge = (object) => {
//  let current = object;
//  let sum = 0;
//  while(current.child) {
//     sum += current.age;
//     current = current.child;
//  }
//  return sum += current.age;
// }
// console.log(calcAge(person));

// Sample 2
// const calcAge = (object) => {
//     let sum = 0;
//     while(object) {
//         sum += object.age;
//         object = object.child;
//     }
//     return sum;
// }
// console.log(calcAge(person));

// Sample 3
// const calcAge = (object) => {
//   let current = object;
//   let sum = 0;
//   do {
//     sum += current.age;
//     current = current.child;
//   } while (current);
//   return sum;
// };
// console.log(calcAge(person));
