// Home work

// Random generator
// const randomGenerator = (min, max) => {
//     return Math.trunc(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomGenerator(20, 30));

// sign, sqrt, cbrt, pow, abs, round, floor, ceil, trunc

// Sqrt
// const mySqrt = (number) => number ** (1 / 2);
// console.log(mySqrt(25));

// Sign
// const sign = (number) => {
//     if(number > 0) {
//         console.log(1);
//     } else if(number < 0){
//         console.log(-1);
//     } else if(number === 0) {
//         console.log(0);
//     } else if(number === -0){
//         console.log(-0); // Faqat -0 ni o'qimayapti
//     }
// }
// sign(0);

// Abs
// const trunc = (number) => {
//     console.log(parseInt(number));
// }
// trunc(12.222);

// Pow
// const pow = (num1, num2) => {
//     console.log(num1 ** num2);
// }
// pow(2, 5);

// Abs
// const abs = (number) => {
//     if(number > 0) {
//         console.log(number);
//     } else if(number < 0){
//         console.log(-number);
//     }else{
//         console.log(0);
//     }
// }
// abs(3);

// Yaxlitlash
// function yaxlitlash(son) {
//   let butunQisminson = parseInt(son);
//   let onlikQismi = son - butunQisminson;
//   if (onlikQismi >= 0.5) {
//     return butunQisminson + 1;
//   } else {
//     return butunQisminson;
//   }
// }

// let son = 5.2;
// let yaxlitlanganSon = yaxlitlash(son);

// console.log(yaxlitlanganSon);

// Codwars
// Hali ishlamadi
// const twoArePositive = (num1, num2, num3) => {
//   if ((num1 && num2 > 0)) {
//     console.log(true);
//   } else if (num2 && num3 >= 0) {
//     console.log(true);
//   } else if (num1 && num3 >= 0) {
//     console.log(true);
//   } else if (num1 && num3 <= 0) {
//     console.log(false);
//   } else if(num1 || num2 || num3 > 0) {
//     console.log(false);
//   } else if(num1 && num2 && num3 < 0){
//     console.log(false);
//   }
// };

// twoArePositive(2, 4, -3) // true
// twoArePositive(-4, 6, 8) // true
// twoArePositive(4, -6, 9) // true
// twoArePositive(-4, 6, 0) // false
// twoArePositive(4, 6, 10) // false
// twoArePositive(-14, -3, -4) // false

// Task 2
// const num = (a) => {
//   if (a % 2 === 0 && a >= 0) {
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// };
// num(1);