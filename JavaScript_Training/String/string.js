let msg = "Good morning everyone";
let email = "murali@gmail.com";
console.log(msg.length);
console.log(msg.trim().length); //it will remove spaces in the start and in the end
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.toLocaleLowerCase());
console.log(msg.toLocaleUpperCase());
console.log(msg.charAt(1));
console.log(msg.charCodeAt(1));
console.log(email.indexOf("@gmail")); //it will return first index pos of given char
console.log(msg.lastIndexOf("o"));
console.log(email.includes(".com")); //it will return true if the string contains given substr
console.log(msg.split(" ").length);
console.log(msg.slice(0, 3));
