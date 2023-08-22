// If-else - shartli operatorlar

let time = 2;

if (time > 6 && time <= 10) {
    console.log("Xayrli kun");
} else if (time > 10 && time <= 17) {
    console.log("Xayrli kun");
} else if (time > 17 && time <= 20) {
    console.log("Xayrli kech");
} else {
    console.log("Kiritilgan vaqt noto'g'ri!");
}

// Switch-case 

let weather = "Qor";

switch(weather) {
    case "Quyosh": console.log("Bosh kiyim oling!"); break;
    case "Yomg'ir": console.log("Soyabon oling!"); break;
    case "Qor": console.log("Qalin kiyining!"); break;
    default: console.log("Noto'g'ri ma'lumot kiritildi!")
}