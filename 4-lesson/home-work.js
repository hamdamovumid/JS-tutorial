// Task 1
if ("0") {
    console.log('hello'); 
}
// result hello

// Task 2
let a = 1, b = 1;
let result = a + b < 4;
result ? console.log("Below") : console.log("Over");
// result Below

// Task 3
let login = "Director";
login == "Employee" ? console.log("Hello") 
: login == "Director" ? console.log("Greetings")
: login == "" ? console.log("Login no") 
: console.log("");

// Task 4 
let browser = "";
switch (browser) {
    case "Edge": console.log("You've got the Edge!"); break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        console.log("Okay we suppurt these braowsers too"); break;
    default: console.log("We hope that this page looks ok!")
}