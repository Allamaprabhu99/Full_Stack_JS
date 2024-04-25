//function statement
function sayHello() {
  console.log("Hello");
}

sayHello();

function sum(num1, num2) {
  //num1=10,num2=undefined
  return num1 + num2; //10+undefined
}

console.log(sum(10, 20));
console.log(sum(10, "20"));
console.log(sum(10));
console.log(sum(10, true));

//function expression

let sub = function (num1, num2) {
  return num1 - num2;
};

let add = function (num1, num2) {
  return num1 + num2;
};

console.log(sub(20, 10));

//callback function

function calculate(num1, num2, callback) {
  //calculate is a higher order function
  //num1=20,num2=30,callback=function(num1,num2){    return num1+num2}
  return callback(num1, num2); //callback(20,30)//50
}

console.log(calculate(20, 30, sub)); //sub is a callback function
console.log(calculate(20, 30, add)); //add is a callback function
console.log(
  calculate(20, 30, function (num1, num2) {
    return num1 * num2;
  })
);

function calculate(x, y, callback) {
  const result = x * y;
  callback(result);
}

calculate(5, 10, function (result) {
  console.log("The result is:", result);
});

let diff = (num1, num2) => num1 - num2;
console.log(diff(20, 30));
console.log(
  calculate(40, 2, (num1, num2) => {
    let res = num1 / num2;
    return res;
  })
);
console.log(calculate(40, 3, (num1, num2) => num1 % num2));