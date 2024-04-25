/*function increment()
{
    let counter=0
    counter++
   return counter
}

console.log(increment())
console.log(increment())
console.log(increment())*/

//counter will be earsed from the mem after each function call
//each time counter is created newly

function increment_closure() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

let inc_func = increment_closure(); //counter=0
//inc_func= function(){counter++; console.log(counter) }
inc_func(); //c=1
inc_func(); //c=2
inc_func(); //c=3
