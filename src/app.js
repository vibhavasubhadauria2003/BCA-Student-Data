import express from "express";

const app=express();

app.use(express.static('views'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
//importing menu router
import menuRouter from './routes/menu.router.js'

// use of router
app.use('/',menuRouter)

//importing router
import userRouter from './routes/user.router.js'

// use of router
app.use('/users',userRouter)

export {app};