const arr = [10, 20, 30, 40, 50, 60];
//const [num1, num2, num3] = arr;
const [num1, , num2, , num3] = arr;
console.log(num1, num2, num3);

const person = {
  name: "Sid",
  place: "Bangalore",
  worksfor: "Accenture",
};

// let { worksfor, place, name } = person;
// console.log(worksfor, place, name);

function dispay({ worksfor, place, name }) {
  console.log(name, place, worksfor);
}
dispay(person);

const person1 = { name1: "John", age: 30 };

// Extracting values from the 'person' object
const { name1, age } = person1;

console.log(name1); // Output: 'John'
console.log(age); // Output: 30

const numbers = [1, 2, 3, 4, 5];

// Extracting values from the 'numbers' array
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Destructuring within function parameters
function greet({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person2 = { name: "Alice", age: 25 };
greet(person2); // Output: Hello, Alice! You are 25 years old.

// Providing default values in case the property doesn't exist
const { profession = "Developer" } = person2;

console.log(profession); // Output: 'Developer' (if 'profession' doesn't exist in 'person2')

// Renaming variables during destructuring
const { name: fullName } = person2;
const { age: tage } = person2;

console.log(fullName);
console.log(tage);
