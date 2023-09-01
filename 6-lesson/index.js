// 1. Uchburchak yuzi
// 2. Aylana uzunligi
// 3. Doira yuzini topish
// 4. Sonni palindromlikka tekshirish (121 => 121)
// 5. Sonni murakkablikka tekshirish (131)
// 6. FizzBuzz, batafsil pastda
// 1-100 sonlar, 3ga  "Fizz", 5ga "Buzz", 3 ga 5 ga "FizzBuzz"

// Task 1
function findTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return "Asos va balandlik musbat qiymatlar bo'lishi kerak.";
  }
  const area = 0.5 * base * height;
  return area;
}

const baseLength = 0; // Uchburchakning asos uzunligi
const heightLength = 5; // Uchburchakning balandligi

const triangleArea = findTriangleArea(baseLength, heightLength);
console.log("Uchburchak yuzi:", triangleArea);

// Task 4
const isPalindrome = (number) => {
    let bir, un, yuz;
    yuz = parseInt(number / 100);
    un = parseInt((number - yuz * 100) / 10);
    bir = number % 10;
    let number2 = bir * 100 + un * 10 + yuz;
    if (number === number2){
        console.log("Palindrom son");
    }else{
        console.log("Palindrom son emas");
    }
}

isPalindrome(121);