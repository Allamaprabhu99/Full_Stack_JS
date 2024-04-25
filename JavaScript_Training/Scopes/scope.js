/*
var-function scope-redeclared-reassign
let-block scope-no redeclared-reassign
const-block scope-no redeclare- no reassign


es6-ecmascript6-2015
*/

{
  //block
}

let GLOBALMSG = "welcome to JS session";

function display() {
  var msg = "Hello world";
  let letmsg = "Hello world";
  const org = "Accenture";

  if (true) {
    var msg = "Good morning";
    var msg = "Hi everyone!"; //redeclare
    gobalmsg = "HI EVERYONE!!"; //reassign

    let letmsg = "Good morning";
    //let letmsg="Hi everyone"//no redeclare//error
    letmsg = "GOOD MORNING"; //reassign

    const org = "Accenture pvt ltd";
    //const org="xyz pvt ltd"//no redeclare//error
    //org="ACCENTURE PVT LTD"//no reassign//error

    gobalmsg = "it is restricted";
    console.log("var:" + msg);
    console.log("let:" + letmsg);
    console.log("const:" + org);
    console.log(globalmsg);
  }

  console.log("--------outside the  block----");
  console.log("var:" + msg);
  console.log("let:" + letmsg);
  console.log("const:" + org);
  console.log(globalmsg);
}

display();
console.log(globalmsg);
