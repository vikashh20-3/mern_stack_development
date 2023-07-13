const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

//THIS IS APPLICATION LEVEL MIDDLEWARE
const reqFilter=(req,resp,next)=>{
    console.log(reqFilter);
    if(!req.query.age){
        resp.send("Enter you age")
    }else if (req.query.age<18){
        resp.send("You are not allowed to see this page ")
    }else{

        next();
    }
    
}
app.use(reqFilter)

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(req,resp)=>{
    //to write in browser        /about/?name="vikash"
    resp.send("This is About Page of our application "+req.query.name)
})


app.get('/profile',(_,resp)=>{
    const user={
        name:'vikku',
        email:'viku@gmail.com',
        country:'india',
        skills:['html','java','css','c++']
    }
   resp.render('profile',{user})
});
app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.get('/contact',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
});

app.listen(5000);


