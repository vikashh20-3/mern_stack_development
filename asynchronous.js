const fs =require('fs');
const { resolve } = require('path');
fs.rename("asynchoronous.js","asynchronous.js",(err)=>{
    if(!err) console.log("Succesfully Renamed")
})
console.log("first function .....")

setTimeout(()=>{

    console.log("Second function .....")
},1000)

console.log("Third function .....")




//Drawback of asychronous

a=2;
b=3;

setTimeout(()=>{
b=10
},1000
)
console.log(a+b)


// Promise use 

x=30;
y=93;

let waitingResult = new Promise((resolve, reject)=>{   
    setTimeout(()=>{
        resolve(30) // this data will be store at place of ${data} in waitingresult.then function
    },2000)
})

waitingResult.then((data)=>{
    y=data
    console.log(x+data)
})