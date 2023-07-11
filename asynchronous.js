const fs =require('fs');
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