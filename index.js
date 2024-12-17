import { app } from "./app.js";
import { StudentData } from './data.js';

const port = 7000

app.get("/",(req,res)=>{
    res.render('menu',{ StudentData: StudentData });
}) 


app.listen(port,()=>{
    console.log(`Server runing at ${port}`)
})