const { slice } = require("lodash");

let products = ["mobile", "pendrive", "tv", "monitor", "tv-smart"];
products.includes("mobile");
products.indexOf("monitor");

let res = products.find((p) => p.startsWith("y")); //find first item based on given criteria
/*
mobile=(mobile)=>mobile.startsWith("t")
pendrive=(pendrive)=>pendrive.startsWith("t")
tv=(tv)=>tv.startsWith("t")//true

*/
console.log(res ?? "Product not available");

let filtered_products = products.filter((p) => p.startsWith("y")); //find all items based given criteria
console.log(filtered_products);

let transformeditems = products.map((p) => p.toUpperCase()); //map will transform the items
console.log(transformeditems);
console.log(products);

let alter_upper_items = products.map((p, index) =>
  index % 2 == 0 ? p.toUpperCase() : p
);
console.log(alter_upper_items);

products.forEach((p) => {
  console.log(p.slice(0, 3));
});

console.log(products.slice(0, 3));
