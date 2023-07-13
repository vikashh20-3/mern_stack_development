const fs = require("fs"); //this is non global module so we have to import this
// fs.writeFileSync("demofile.txt", "This file is created by file system module ");
console.log("Directory name", __dirname); //to check the directory
console.log("File Name", __filename); //to show the file name

// Create files in a folder using loop

const path = require("path"); // give us the path 
const dirPath = path.join(__dirname, "fsfiles"); //It Provides us the path for our fs files folder
const dirCrudPath=path.join(__dirname,"crud-files")//It Provides us the path for our crud-files folder
const crudpath=`${dirCrudPath}/crudfile.txt`;

fs.writeFileSync(dirPath + "/file.txt", "demo for folder");

// file  creation with loop

for (i = 2; i < 5; i++) {
  fs.writeFileSync(dirPath + `/demofiles${i}`, "demo text");
}


fs.writeFileSync( `${dirCrudPath}/crudfile.txt` , "this is only ")
fs.appendFile(crudpath,"the crud files operation",(err)=>{ // USE appendFile to update exisiting file
  if(err){

    console.log(err);
  } 
  else{
    console.log("No Error Detected")
  }
})

fs.rename(crudpath,`${dirCrudPath}/crudfiletewo.txt`,(err)=>{ //USE rename  TO RENAME THAT FILE 
  if(!err) console.log("file rename succesfully")
})

fs.unlinkSync(`${dirCrudPath}/crudfile.txt`,(err)=>{
  if(!err) console.log(`${crudpath} Deleted succesfully`)
})