let userinfo = getDetails();

function getDetails() {
  return undefined;
}

try {
  console.log(userinfo.username);
} catch (err) {
  //console.log(err)
  console.log("Pls try after some time");
}

let num1 = 10;
let num2 = 20;

try {
  if (num2 !== 0) {
    console.log(num1 / num2);
  } else {
    throw "Divisible by zero: give valid value for num2";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("Program is completed..");
}
