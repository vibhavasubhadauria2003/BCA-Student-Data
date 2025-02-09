import express from "express";
import bodyParser from "body-parser";
const app=express();
app.use(express.json());
app.use(express.static('views'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.use(bodyParser.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));
//importing menu router
import menuRouter from './routes/menu.router.js'

// use of router
app.use('/',menuRouter)

//importing of regster router
import registerRouter from './routes/register.router.js'
// use of router
app.use('/',registerRouter)

//importing router
import userRouter from './routes/user.router.js'

// use of router
app.use('/users',userRouter)

export {app};