// Home work

// Random generator
// const randomGenerator = (min, max) => {
//     return Math.trunc(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomGenerator(50, 60));

// sign, sqrt, cbrt, pow, abs, round, floor, ceil, trunc

// Sqrt
// const sqrt = (number) => number ** (1 / 2);
// console.log(sqrt(25));

// Cbrt
// const cbrt = (number) => number ** (1 / 3);
// console.log(cbrt(25));

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

// Trunc
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

// Task 1
// const num = (a) => {
//   if (a % 2 === 0 && a >= 0) {
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// };
// num(2);

// Task 2
// function twoArePositive(a, b, c) {
//   if (a > 0 && b > 0 && c < 0) return true;
//   else if (a > 0 && b < 0 && c > 0) return true;
//   else if (a < 0 && b > 0 && c > 0) return true;
//   else false;
// }
// console.log(twoArePositive(-2, 4, 3));