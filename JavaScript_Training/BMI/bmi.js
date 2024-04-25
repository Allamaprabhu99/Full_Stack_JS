function calculateBMI(weight, height) {
  return weight / Math.pow(height, 2);
}

let height = Number(prompt("Enter your height"));
let weight = parseInt(prompt("Enter your weight"));

let bmi = calculateBMI(weight, height);
alert(`Your BMI is: ${bmi.toFixed(2)}`);
