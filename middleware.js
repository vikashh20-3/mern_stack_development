module.exports=reqFilter=(req,resp,next)=>{
    console.log(reqFilter);
    if(!req.query.age){
        resp.send("Enter you age")
    }else if (req.query.age<18){
        resp.send("You are not allowed to see this page ")
    }else{

        next();
    }
    
}