const fs = require("fs"); //this is non global module so we have to import this
// fs.writeFileSync("demofile.txt", "This file is created by file system module ");
console.log("Directory name", __dirname); //to check the directory
console.log("File Name", __filename); //to show the file name

// Create files in a folder using loop

const path = require("path"); // give us the path 
const dirPath = path.join(__dirname, "fsfiles"); //It Provides us the path for our folders

fs.writeFileSync(dirPath + "/file.txt", "demo for folder");

//file  creation with loop

for (i = 2; i < 5; i++) {
  fs.writeFileSync(dirPath + `/demofiles${i}`, "demo text");
}
