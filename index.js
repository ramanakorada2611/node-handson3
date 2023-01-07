const express=require('express');

const app=express();

const firstMiddleware=function(res,req,next){//it is gloabally applicable for all routes
    console.log("this is firstmiddleware")
    next();
}
app.use(firstMiddleware)

const secondMiddleware=function(req,res,next){
    console.log("this is secondmiddleware")
    next();
}

app.get('/page1',secondMiddleware,function(req,res){
    console.log("this is applicable for both firstmiddleware & secondmiddleware")
    res.send({message:"this is firstpage"})
})
app.get('/page2',function(req,res){
    console.log("this is applicable for only firstmiddleware")
    res.send({message:"this is second page"})
})
app.get('/page3',secondMiddleware,function(req,res){
    console.log("this is applicable for both firstmiddleware & second middleware")
    res.send({message:"this is  third page "})
})
app.get('/page4',function(req,res){
    console.log("this is applicable for only firstmiddleware")
    res.send({message:"this is fourth page"})
})
app.listen(5000,()=>{
    console.log("5000 port running")
})