let country = prompt("Enter your country");

switch (country) {
  case "india":
    document.write("<h2>Welcome indian</h2>");
    break;
  case "america":
  case "usa":
    document.write("<h2>Welcome american</h2>");
    break;
  case "germany":
    document.write("<h2>Welcome German</h2>");
    break;
  default:
    document.write("<h2>Welcome Human</h2>");
}


let color = "green";

switch (color) {
  case "green":
  case "blue":
    console.log("This color is cool.");
    break;
  case "red":
  case "yellow":
  case "orange":
    console.log("This color is warm.");
    break;
  default:
    console.log("Unknown color");
}

let score = 75;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80 && score < 90:
    console.log("Grade: B");
    break;
  case score >= 70 && score < 80:
    console.log("Grade: C");
    break;
  case score >= 60 && score < 70:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}
