import { app } from "./app.js";
import { StudentData } from "../data.js";

const port = 7000

app.get("/",(req,res)=>{
    res.render('menu',{ StudentData: StudentData });
    
}) 
app.post("/",(req,res)=>{
    const {username,fullName,email,password} = req.body
    console.log(fullName)
})

app.listen(port,()=>{
    console.log(`Server runing at ${port}`)
})