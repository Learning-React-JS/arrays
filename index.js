const users = [
  {
    name: "Ilkay",
    surname: "Polat",
    age: 34,
  },
  {
    name: "Yasar",
    surname: "Yilmaz",
    age: 40,
  },
  {
    name: "Mehmet",
    surname: "Aslan",
    age: 50,
  },
];

/* push is used to add an element to the end of array*/
users.push({ name: "Fatma", surname: "Ay", age: 32 });
console.log(users);

/* map is used to transform an array by returning a new array containing the results of calling a function on every element in this array */
let nameLenghts = users.map((item) => item.name.length);
console.log(nameLenghts);

/* find is used to find the first element within the given array*/
const findResult = users.find((item) => item.age > 35);
console.log(findResult);

/* filter is used to filter the array according to filter criteria */
const filterResult = users.filter((item) => item.age > 35);
console.log(filterResult);

/* some returns true if at least one element matches with given criteria else returns false */
const someResult = users.some((item) => item.age === 60);
console.log(someResult);

/* every returns true if every element matches with given criteria else returns false*/
const everyResult = users.every((item) => item.age === 5);
console.log("everyResult: ", everyResult);

/* includes returns true if an array contains a specified value.*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");
