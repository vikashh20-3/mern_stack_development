const express = require('express');
const path = require('path');

const app = express();
//#3
// const route =express.Router();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');
// #method second to impliment middleware on specific routes

//THIS IS APPLICATION LEVEL MIDDLEWARE APPLICABLE ON ALL ROUTES
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
///#3
// route.use(reqFilter)
// #1
// THIS WILL IMPLIMENT THIS MIDDLE WARE TO EVERY ROUTE 
// app.use(reqFilter) 

//#method one 
app.get('',(_,resp)=>{ // write reqFilter with the route to use your middleware on specific routes 1
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

///#2
app.get('/login',reqFilter,(_,resp)=>{
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

//#3
// app.use('/',route)

app.listen(5000);


