// CRUD - Create, Read, Update, Delete
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
// const array = (newUser) => {
//     students = [...students, {id: students.length + 1, ...newUser}];
// }
// array({info: "Student", name: "Usmon Akram"});
// console.log(students);

// Read
// Sort year, name
// const array = () => {
//     students.sort((a, b) => a.year - b.year);
// }
// array();
// console.log(students);
// const sortByName = () => {
//     students.sort((a, b) => a.name.localeCompare(b.name));
// }
// sortByName();
// console.log(students);
// Search - filter
// let array = (user) => {
//     return students.filter(v => v.name.toLowerCase().includes(user.toLowerCase()));
// }
// array("A");
// console.log(students);
// let array = (user) => {
//     return students.filter((v) => v.name.toLowerCase().includes(user.toLowerCase()));
// }

// console.log(array("S"));

// Delete
// let deleteUser = (id) => {
//     students = students.filter((v) => v.id !== id);
// }
// deleteUser(3);
// console.log(students);

// Update
// let updateUser = (newName, idUser) => {
//   students = students.map((v) => {
//     if (v.id == idUser) {
//       return { ...v, name: newName };
//     } else return v;
//   });
// };
// updateUser("Umid Hamdamov", 3);
// console.log(students);