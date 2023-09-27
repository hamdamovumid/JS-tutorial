// Map
// let key = {name: "Umar"};
// let map = new Map([
//     ["name", "Umid"],
//     ["age", 22],
//     [key, "student"]
// ]);
// set()
// map.set("skil", "JS");
// console.log(map);

// map.set("age", 23);
// console.log(map);

// get()
// console.log(map.get(key));

// delete()
// map.delete("age");
// console.log(map);

// clear()
// map.clear();
// console.log(map);

// has()
// console.log(map.has("ageNum"));

//for-of
// for(let item of map){
//     console.log(item);
// }

// forEach
// map.forEach((value, index, map) => {
//     console.log(value, index, map);
// });

// Set
// let key = {name: "Umar"};
// let set = new Set([
//     "salom", "dunyo", null, undefined, 12, key, "salom"
// ]);
// add()
// set.add("wba");
// console.log(set);

// has()
// console.log(set.has("sasa"));

// delete()

// clear()

// for-of

// forEach

// Set => Array
// console.log(Array.from(set));

// Array => Set
// let arr = [1, 2, 3, 4, 5, 1];
// let set1 = new Set(arr);
// console.log(set1);

// WeakMap
// let weakMap = new WeakMap();
// let key1 = [1, 2];
// let key2 = {name: "Umid"};
// weakMap.set(key1, key2)
// console.log(weakMap);

// WeakSet
// let weakSet = new WeakSet();
// let key1 = {name: "Umid"};
// weakSet.add(key1)
// console.log(weakSet);

// Recursion
// 1-n sonlar yig'indisi
// const sum = (n) => {
//     if(n <= 1) return 1;
//     return n + sum(n - 1);
// }
// console.log(sum(5));

let person = {
  name: "grandfather",
  age: 80,
  child: {
    name: "father",
    age: 50,
    child: {
      name: "boy",
      age: 22,
    },
  },
};

const sum = (person) => {
    if(!person) return 0;
    return person.age + sum(person.child)
}
let res = sum(person);
console.log(res);