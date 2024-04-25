const add = (a, b) => a + b;

console.log('Hi '+ add(5,4));
const numbers = [1, 2, 3, 4, 5];

// Callback function passed to forEach
numbers.forEach((num)=> {
  console.log(num * 2);
});

// const express = require("express");
// const app = express();

// app.get("/name", (req, resp) => {
//   console.log(req.query.name);
//   resp.send("Welcome, " + " " + req.query.name);
// });

// app.get("/about", (req, resp) => {
//   resp.send("Welcome, This is a About Page");
// });

// app.get("/help", (req, resp) => {
//   resp.send("Welcome, This is a Help Page");
// });

// app.listen(5000);
