import path from 'path';
import { fileURLToPath } from 'url';
import { app } from "./app.js";
const port = 7000


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.get('/profile/:n',(req,res)=>{
    res.send(`Value you send to page is ${req.params.n}`);
})

app.get("/Vibhavasu",(req,res)=>{
    res.render('index',{
        profile_link:'vibhavasu.jpg',
        about:'Vibahvasu Bhadauria Student of DSVV. Currently persuing BCA.',
        user_name:'Vibhavasu Bhadauria',
        profession:'Student',
        dob:'13 April 2003',
        father_name:'Prabodh Kumar Bhadauria',
        mother_name:'Seema Bhadauria',
        user_location:'Mainpuri'
    });
})
app.get("/Rohit_Sharma",(req,res)=>{
    res.render('index',{
        profile_link:'rohit-sharma.WEBP',
        about:'Rohit Gurunath Sharma is an Indian international cricketer who currently plays for and captains the India national cricket team in Test and One Day International matches.',
        user_name:'Rohit Sharma',
        profession:'Indian Cricketer',
        dob:'30 April 1987',
        father_name:'Gurunath Sharma',
        mother_name:'Purnima Sharma',
        user_location:'Mumbai'
    });
})
app.get("/Akhil",(req,res)=>{
    res.render('index',{
        profile_link:'rohit-sharma.WEBP',
        about:'Akhil Pratap Singh Student of DSVV. Currently persuing BCA.',
        user_name:'Akhil Pratap Singh',
        profession:'Student',
        dob:'21 August 2005',
        father_name:'Abnish Kumar',
        mother_name:'Kirti Singh',
        user_location:'Auraiya'
    });
})

app.listen(port,()=>{
    console.log(`Server runing at ${port}`)
})