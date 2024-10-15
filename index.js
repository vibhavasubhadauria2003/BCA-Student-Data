import path from 'path';
import { fileURLToPath } from 'url';
import { app } from "./app.js";
import { vibhavasu,akhil,rohit_sharma,sarthak } from './data.js';

const port = 7000


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
// app.get('/profile/:n',(req,res)=>{
//     res.send(`Value you send to page is ${req.params.n}`);
// })

function serve(name,data){
    app.get(name,(req,res)=>{
        res.render('index',data);
    })
}

// app.get("/Vibhavasu",(req,res)=>{
//     res.render('index',vibhavasu);
// })
// app.get("/Rohit_Sharma",(req,res)=>{
//     res.render('index',rohit_sharma);
// })
// app.get("/Akhil",(req,res)=>{
//     res.render('index',akhil);
// })

serve("/Akhil",akhil);
serve("/Vibhavasu",vibhavasu);
serve("/Rohit-Sharma",rohit_sharma);
serve("/Sarthak",sarthak)


app.listen(port,()=>{
    console.log(`Server runing at ${port}`)
})