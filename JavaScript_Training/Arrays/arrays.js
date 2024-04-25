const animals = ["lion", "tiger", "Elephant"];
console.log(animals.length); //no of items
animals.pop(); //remove last item
console.log(animals);
//animals=["cat","dog","cow"]//error//const cannot be reassigned
animals.push("hippo"); //it will add the given item to last pos
console.log(animals);

animals.shift(); //it will remove first item
console.log(animals);

animals.unshift("zebra"); //it will add the given item to first pos
console.log(animals);

animals.splice(1, 1); //splice(pos,deletecount)
console.log(animals);

animals.splice(1, 0, "deer", "leopard"); //splice(pos,0,items_tobe_inserted)
console.log(animals);

console.log(animals.includes("tiger"));
console.log(animals.indexOf("hippo")); //return first pos of given item
animals.push("hippo");
console.log(animals.lastIndexOf("hippo")); //return last pos of given item
animals.push(["shark", "whale", "seal"]);
console.log(animals.flat()); //it will flat nested arrays in to single dimension
console.log(animals);
console.log(animals.flat().join("-"));
