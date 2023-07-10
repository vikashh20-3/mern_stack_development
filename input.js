console.log(process.argv);
// by defalut two position are fixed

const fs = require("fs");
let input = process.argv;

if (input[2] === "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "remove") {
  fs.unlinkSync(input[3]); //this will delete the file
} else {
  console.log("Invalid ");
}
