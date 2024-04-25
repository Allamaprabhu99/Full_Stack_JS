const arr = [10, 20, 30, 40, 50, 60];
const person = {
  name: "Sid",
  place: "Bangalore",
  worksfor: "Accenture",
};

//rest

//const [a, b, ...c] = arr;
const [...c] = arr;
console.log(c);

const { name, ...p1 } = person;
console.log(p1);

//spread
const arr1 = [1, 2, 3, 4, 5];
const arr_combined = [1000, ...arr1, 2000, ...arr, 3000];
console.log(arr_combined);

const p2 = {
  team: "LKM",
  salary: 3000,
};

const p3 = { ...person, ...p2, location: "BDC14", salary: [2000,4000] };
console.log(p3);

const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
  temp1: "001",
  temp2: "002",
  firstName: "John",
  lastName: "Doe",
};

const { temp1, temp2, ...person1 } = data;

const newArray = [...restOfItems];

const newObject = {
  ...person1,
};