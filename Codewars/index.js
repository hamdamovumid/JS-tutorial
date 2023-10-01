// Codewars

// Task 1
// let arr = [1, -4, 7, 12, 2, -2];

// 1-yechim
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// positiveSum(arr);

// 2-yechim
// function positiveSum(arr) {
//   console.log(arr.reduce((a, b) => (a && b >= 0 ? a + b : a)));
// }
// positiveSum(arr);

// Task 2
// function fakeBin(x) {
//   const arr = x.split("");
//   let newStr = [];
//   for (let i = 0; i < arr.length; i++) {
//     Number(arr[i]) < 5 ? newStr.push(0) : newStr.push(1);
//   }
//   return newStr.join("");
// }
// fakeBin(123456);

// Task 3
// function numberToString(num) {
//   return console.log(String(num));
// }
// numberToString(123);

// Task 4
// function spinWords(sentence) {
//   const sentenceArray = sentence.split(" ");
//   let result = "";
//   sentenceArray.map((str, i) => {
//     if (str.length >= 5) {
//       sentenceArray[i] = str.split("").reverse().join("");
//     } else {
//       sentenceArray[i] = str;
//     }
//     result = sentenceArray.join(" ");
//   });
//   return result;
// }
// console.log(spinWords("Hey fellow warriors"));

// Task 5
// let array = [
//   "who",
//   "bake",
//   "over",
//   "the",
//   "world",
//   "maybe",
//   "knows",
//   "perhaps",
//   "coin",
// ];
// function twoSort(s) {
//   return s.sort()[0].split("").join("***");
// }
// console.log(twoSort(array));

// Task 6
// function removeChar(str) {
//   return (newStr = str.slice(1, -1));
// }
// removeChar("wabbrain");

// Task 7
// function stringy(size) {
//   let result = "1";
//   for (let i = 1; i < size; i++) {
//     if (i % 2 === 0) {
//       result += "0";
//     } else {
//       result += "1";
//     }
//   }
//   return result;
// }
// stringy(6);
// 101010

// Task8
// function doubleChar(str) {
//   var newString = "";
//   for (i = 0; i < str.length; i++) {
//     newString += str[i] + str[i];
//   }
//   return newString;
// }
// "String"      -> "SSttrriinngg"

// Task 9
// function billboard(name, num, price = 30){
//     let sum = 0;
//     for(i = 0; i < name.length; i++){
//         sum = i * price + 30;
//     }
//     console.log(sum);
//     // return sum;
// }
// billboard("Hjalmar Liupold");

// billboard = (name, price = 30) =>
// [...new Array(name.length)].fill(price).reduce((prev, curr) => prev + curr);

// Task 10
// function sayHello(name, city, state) {
//   name.pop();
//   if (name.length == 2) {
//     let res = `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`;
//     console.log(res);
//   } else if (name.length == 3) {
//     let res = `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`;
//     console.log(res);
//   }
//   //   else{
//   //     let res = `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`
//   //     console.log(res);
//   //   }
// }
// sayHello(["John", "Smith", "Umid", "Hamdamov"], "Phoenix", "Arizona");

// function sayHello(name, city, state) {
//   if (name.length == 2) {
//     let res = `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`;
//     console.log(res);
//     return res;
//   } else if (name.length == 3) {
//     let res = `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`;
//     console.log(res);
//     return res;
//   } else if (name.length >= 4) {
//     let res = `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`;
//     console.log(res);
//     return res;
//   }
// }
// sayHello(["John", "Smith", "Umid", "Hamdamov"], "Phoenix", "Arizona");

// function sayHello(name, city, state) {
//   return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
// }

// function array(string){
//   if(string == '' || string == '1' || string == 'A1,B2'){
//     console.log(string = null);
//   }else{
//     newA = string.split(',');
//     newA.pop();
//     newA.shift();
//     newAa = newA.join();
//     console.log(newAa);
//   }
// }
// array('');
// array('1');
// array('A1,B2');
// array('1,2,3');
// array('1,2,3,4');
// array('A1,B2,C3,D4,E5');
// array('A,1,23,456,78,9,Z');