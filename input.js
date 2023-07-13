console.log(process.argv);
// by defalut two position are fixed

const fs = require("fs");
let input = process.argv;
// fs.writeFileSync(input[2],input[3]);
if (input[2] === "add") {
  fs.writeFileSync(input[2], input[3]);
} else if (input[2] === "remove") {
  fs.unlinkSync(input[2]); //this will delete the file
} else {
  console.log("Invalid ");
}
