import path from 'path';
import { fileURLToPath } from 'url';
import { app } from "./app.js";
const port = 7000


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get("/Rohit_Sharma",(req,res)=>{
    res.sendFile(path.join(__dirname, 'Front-END/index.html'));
})

app.set('view engine', 'ejs');

app.get("/Vibhavasu",(req,res)=>{
    res.render('index',{
        profile_link:'vibhavasu.jpg',
        about:'Rohit Gurunath Sharma is an Indian international cricketer who currently plays for and captains the India national cricket team in Test and One Day International matches.',
        user_name:'Vibhavasu Bhadauria',
        profession:'Student',
        dob:'13 April 2003',
        father_name:'Prabodh Kumar Bhadauria',
        mother_name:'Seema Bhadauria',
        user_location:'Mainpuri'
    });
})

app.listen(port,()=>{
    console.log(`Server runing at ${port}`)
})