const mystery = "answer"; // Assuming 'answer' is defined elsewhere
const PI = Math.PI; // 'Math' should be capitalized

const obj = {
  p1: 10,
  p2: 20,
  name:"John",
  greet: function() {
    console.log(`Hi, ${this.name}!`);
  },
  f2: () => {},
  [mystery]: 42, // Corrected the semicolon at the end of this line
  PI, // You can directly reference 'PI' here without assigning it to another variable
};
obj.greet();
