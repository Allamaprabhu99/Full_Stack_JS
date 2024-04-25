//&&,||,!

let firstname = "sachin";
let lastname = "Tendulkar";

let username = firstname || lastname || "Guest"; // it will return first true value & if all are false then it will return last exp
console.log("welcome " + username);

let fullname = firstname && lastname && firstname + "-" + lastname; //it will return first false value & if all are true then it will return last exp
console.log("fullname:" + fullname);

let price = 1000;

let msg = price < 10000 ? "Affordable" : "Expensive";
console.log(msg);