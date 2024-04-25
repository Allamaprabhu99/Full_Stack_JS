//IIFE-immediately invoked function expression
(function () {
  console.log("hello from IIFE");
})();

(function () {
  console.log("Welcome to the js session");
})();

(function (num1, num2) {
  console.log(num1 + num2);
})(10, 20);
