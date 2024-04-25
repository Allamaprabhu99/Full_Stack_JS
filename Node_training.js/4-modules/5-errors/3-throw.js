// const path = require('path');
// const fs = require('fs');

// const files = ['.bash_profile', 'kjkjhh', '.npmrc'];

// files.forEach(file => {
//   try {
//     const filePath = path.resolve(process.env.HOME, file);
//     const data = fs.readFileSync(filePath);
//     console.log('File data is', data);
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log('File not found');
//     } else {
//       throw err;
//     }
//   }
// });

const path = require("path");
const fs = require("fs");

const files = ["./1-loop.js", "./zzzz", "./2-try.js"];

files.forEach((file) => {
  try {
    const data = fs.readFileSync(file,'hdi');
    console.log("File data is", data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File not found");
    } else {
      throw err;
    }
  }
});
