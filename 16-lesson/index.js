// // const fibonacci = (num) => {
// //   if(num < 2) return num;
// //   return fibonacci(num - 1) + fibonacci(num - 2);
// // };
// // console.log(fibonacci(6));
// // 0, 1, 1, 2, 3, 5, 8, 13

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// const getTotalSalary = (company) => {
//   if (Array.isArray(company)) {
//     return company.reduce((c, v) => c + v.salary, 0);
//   }
//   let sum = 0;
//   for (let key in company) {
//     sum += getTotalSalary(company[key]);
//   }
//   return sum;
// };
// console.log(getTotalSalary(company));
console.log(str);