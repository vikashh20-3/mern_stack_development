const fs = require("fs"); //this is non global module so we have to import this
fs.writeFileSync("demofile.txt", "This file is created by file system module ");
console.log("Directory name", __dirname); //to check the directory
console.log("File Name", __filename); //to show the file name
