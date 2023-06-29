const express=require("express")
const app=express()
// app.use(logger)
function logger(req,res,next){
    if(req.url==="/about"){
        console.log("middleware started")
        next()
        return  // if I dont' write return its not going to stop and goes to res.end that will cause error in console)
    }
  res.end("Invalid page")
 
}
app.use(logger)
app.get("/",(req,res)=>{
    console.log("Home page")
    res.send("Home")
})
app.get("/contacts",(req,res)=>{
    console.log("contacts page")
    res.end("contacts page")
})
app.get('/about',(req,res)=>{
    console.log("about pagge")
    res.send("about page")
})
app.listen(3300,()=>{
    console.log("port started")
})