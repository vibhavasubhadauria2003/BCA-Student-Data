import express from "express";

const app=express();

app.use(express.static('views'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
//importing router
import userRouter from './router.js'
// use of router
app.use('/users',userRouter)

export {app};