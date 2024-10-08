import express from "express";

const app=express();


app.get("/",(req,res)=>{
    res.send("<h1>Entry page</h1>");
})

app.use(express.static('views'))

export {app}