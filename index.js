import { app } from "./app.js";
import { StudentData } from './data.js';

const port = 7000
app.set('view engine', 'ejs');

function serve(name,data){
    app.get(name,(req,res)=>{
        res.render('index',data);
    })
}

StudentData.forEach(element => {
    serve(element.servename,element);
});

app.listen(port,()=>{
    console.log(`Server runing at ${port}`)
})

// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.get('/profile/:n',(req,res)=>{
//     res.send(`Value you send to page is ${req.params.n}`);
// })
// app.get("/Vibhavasu",(req,res)=>{
//     res.render('index',vibhavasu);
// })
// app.get("/Rohit_Sharma",(req,res)=>{
//     res.render('index',rohit_sharma);
// })
// app.get("/Akhil",(req,res)=>{
//     res.render('index',akhil);
// })

// serve(akhil.servename,akhil);
// serve(vibhavasu.servename,vibhavasu);
// serve(rohit_sharma.servename,rohit_sharma);
// serve(sarthak.servename,sarthak)