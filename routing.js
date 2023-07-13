const path = require('path')

const express=require('express')
const app=express();
const publicPath=path.join(__dirname,'public');
console.log(publicPath);

// app.use(express.static(publicPath));// this method is used to load static pages with extension in url
// app.get('',(req,resp)=>{
//     resp.send("This is homepage of our application")
// })

// app.get('/about',(req,resp)=>{
//     //to write in browser        /about/?name="vikash"
//     resp.send("This is About Page of our application "+req.query.name)
// })

// app.get('/contact',(req,resp)=>{
//     resp.send("This is Contact Page of our application")
// })

app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('*',(req,resp)=>{
        resp.sendFile(`${publicPath}/404.html`)
})


app.listen(5000)