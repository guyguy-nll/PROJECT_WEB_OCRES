const express=require("express");
//on cree une app qui utilise express
const app=express();
app.get("/",(req,res)=>{
    res.send("heyy c'est math");
});
app.listen(3000,()=>{
    console.log("server front lance");
});