let mammals = ["tiger", "lion", "Elephant"];
let aquatic = ["shark", "jellyfish", "seal"];

/*let mammals_copy=mammals
mammals.pop()
mammals.push("goat")
console.log(mammals_copy)*/
//...spread optr=>to spread the values of given array
console.log(mammals);
console.log(...mammals);

let mammals_copy = [...mammals]; //create copy
mammals.pop();
console.log(mammals_copy);

let animals = [...mammals, ...aquatic]; //concat arrays
console.log(animals);

mammals = [...mammals, "giraff"]; //insertion
console.log(mammals);
let [...mammals_copy1]=mammals;
console.log(mammals_copy1)