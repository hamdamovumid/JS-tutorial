// Task 1
// let str1 = 'web';
// let str2 = 'bew';

// Task 2
// let str = "Webbr@in Ac@demy";
// str = str.replaceAll("@", "a");
// console.log(str);

// Task 3
// let num = [1, 2, 3, 4, 5, 2, 5, 1, 6, 2];
// for(let item of num){
//
// }

// Task 4
// let num1 = [1, 2, 3];
// let num2 = num1.join("");
// let num3 = [1, 2, 3];
// let num4 = num3.join("");
// console.log(num2 == num4);

// Task 5
let array = [1, 3, 10, 20, 30, 40, 100];

let num = () => {
  array = array.filter((v) => {
    if (v >= 10 && v < 99) {
      console.log(v);
    } else {
      console.log("check");
    }
  });
};

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.filter((v, i, a) => {
//   return v % 2 === 0;
// });
// console.log(newArray);