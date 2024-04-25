let res = confirm("Are you want to proceed?");
console.log(res);

if (res) {
  document.write("<h2>Welcome user</h2>");
} else {
  document.write("<h2>sorry you have cancled!</h2>");
}
let username = prompt("Enter user name");
document.write("<h2>Hello " + username + "</h2>");