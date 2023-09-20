// Task 1
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let monthsNum = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ];
let days = [
  "Mon",
  "Tue",
  "Wen",
  "Thr",
  "Fri",
  "Sat",
  "Sun",
];
// const moment = () => {
//   return {
//     format(param) {
//       switch (param) {
//         case "MMMM Do YYYY, h:mm:ss a":
//           console.log(
//             months[new Date().getMonth()],
//             days[new Date().getDay()],
//             new Date().getHours(),
//             new Date().getMinutes(),
//             new Date().getSeconds()); break
//         case "dddd": 
//           console.log(days[new Date().getDay()]); break
//         case "MMM Do YY":
//           console.log(
//             months[new Date().getMonth()],
//             days[new Date().getDay()],
//             new Date().getFullYear(),
//           ); break
//       }
//     },
//   };
// };
// moment().format("MMMM Do YYYY, h:mm:ss a");

// Task 2
// const moment = () => {
//   return {
//     format(param) {
//       switch (param) {
//         case "LT":
//           console.log(
//             new Date().getHours(), ":",
//             new Date().getMinutes()); break
//         case "LTS":
//           console.log(
//             new Date().getHours(), ":",
//             new Date().getMinutes(), ":",
//             new Date().getSeconds()
//             ); break
//         case "L":
//           console.log(
//             monthsNum[new Date().getMonth()], "/",
//             days[new Date().getDay()], "/",
//             new Date().getFullYear(),
//           ); break
//       };
//     },
//   };
// };
// moment().format("LTS");