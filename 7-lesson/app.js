// Home work

// task 1
let rectange = {
    width: 20,
    heigth: 15,
    getArea(){
        console.log(this.width * this.heigth / 2);
    },
    perimeter(){
        console.log(2 * a + 2 * b);
    }
}

rectange.getArea();

// task 2

let user = {
    name: "John",
    surname: "Smith"
}

user.name = "Pete" // Change
delete user.name // Dalete

// task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    sum(){
        for(let key in salaries){
            salaries.John + salaries.Ann + salaries.Pete
            console.log(salaries[key]);
        }
    }
}

let sum = () => {
    console.log(salaries.John + salaries.Ann + salaries.Pete);
}

sum();