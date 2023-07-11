const express=require('express')
const app=express();


app.get('',(req,resp)=>{
    resp.send("This is homepage of our application")
})

app.get('/about',(req,resp)=>{
    //to write in browser        /about/?name="vikash"
    resp.send("This is About Page of our application "+req.query.name)
})

app.get('/contact',(req,resp)=>{
    resp.send("This is Contact Page of our application")
})


app.listen(5000)