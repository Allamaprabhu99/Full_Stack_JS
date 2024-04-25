let num1 = 10;
let num2 = "10";

console.log("add:" + (num1 + num2));
console.log("sub:" + (num1 - num2));
console.log("mul:" + num1 * num2);
console.log("div:" + num1 / num2);

/*
1)()
2)*,/
3)+,-

*/

let res = "20" + 10 + 10 - 10; //"201000"
console.log(res);

console.log("num1-lessthan-num2:" + (num1 < num2));
console.log("num1-greathan-num2:" + (num1 > num2));
console.log("num1-lessthan/equal-num2:" + (num1 <= num2));
console.log("num1-greaterthan/equal-num2:" + (num1 >= num2));

console.log("num1==num2 " + (num1 == num2)); //it will check for value
console.log("num1===num2 " + (num1 === num2)+"\n"); //it will check for both value and datatype//strict equality

let price=1000
 
let msg=price<10000?"Affordable":"Expensive"
console.log(msg)


//Nullish operator
 
//??-undefined & null=>false
//||-0,false,undefined,null=>false

let width//undefined
let height=10

let area=(height??1)*(width??1)//10*undefined=>NAN

console.log(area)