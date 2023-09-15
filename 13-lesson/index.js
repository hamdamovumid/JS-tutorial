// Sonlarni yig'indisini topadigan function ↓
// let array = [1, 2, 3, 4, 5];

// forEach
// let sum = 0;
// array.forEach(v => sum += v);
// console.log(sum);

// reduce
// let sum = array.reduce((c, v) => c + v);
// console.log(sum);

// map
// let sum = 0;
// array.map((v) => {
//     sum += v
// });
// console.log(sum);

// for-of
// let sum = 0;
// for(let item of array) {
//     sum += item;
// }
// console.log(sum);

// join()
// let newArray = array.join("+");
// console.log(eval(newArray));

// CRUD

let students = [
  { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
  { id: 2, year: 2000, name: "Asilbek Tolipov" },
  { id: 3, year: 2002, name: "Najmiddin Nazarov" },
  { id: 4, year: 2002, name: "Mominov Abdulloh" },
  { id: 5, year: 1995, name: "Sardor Tursunboyev" },
  { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
  { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
  { id: 8, year: 2002, name: "Shukurov Shohruh" },
];

// Create
let createUser = (newUser) => {
    students = [...students, {id: students.length + 1, ...newUser}];
}
createUser({year: 2000, name: "Umar Akramov"});
console.log(students);

// Read
// Sort
// let user1 = students.sort((a, b) => a.name.localeCompare(b.name)); // sort name
// let user2 = students.sort((a, b) => a.year - b.year); // sort year
// console.log(user1);
// console.log(user2);

// Sort function
// let sortByName = () => {
//     students.sort((a, b) => a.name.localeCompare(b.name));
// }
// sortByName();
// console.log(students);

// Search - filter
// let searchByName = (smth) => {
//     return students.filter((v) => v.name.toLowerCase().includes(smth.toLowerCase()));
// }
// console.log(searchByName("S"));

// Delete
// let deleteUser = (id) => {
//     students = students.filter((v) => v.id !== id);
// }
// deleteUser(2);
// console.log(students);

// Update
// let updateUser = (newName, id) => {
//   students = students.map((v) => {
//     if (v.id === id) {
//       return { ...v, name: newName };
//     } else return v
//   });
// };
// updateUser("Iqbol Yuldashev", 1);
// console.log(students);