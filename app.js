import express from "express";

const app=express();



app.use(express.static('views'));
app.use(express.static('public'));


export {app}