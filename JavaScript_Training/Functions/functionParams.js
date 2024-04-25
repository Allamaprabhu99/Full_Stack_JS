//default param

console.log(discount(100));
console.log(discount(100, 0.1));
console.log(discount(100, 0.5, 0.05));

function discount(price, per = 0.05, tax = 0.1) {
  console.log(price + "-" + per + "-" + tax);
  return price - price * per + price * tax;
}

//console.log(discount(100,0.1))


//...rest operator=> used to collect rest of the values
//after rest param there should not be any other param


/*function sum(num1,...nums)
{
    console.log(num1)
    console.log(nums)
}

sum(10)
sum(10,20)
sum(10,20,30)
sum(10,20,30,40)*/

function add(...nums)
{
    let total=0
    nums.forEach((n)=> total=total+n)
    console.log(total)
}
add(10)
add(10,20)
add(10,20,30)
add(10,20,30,40)
