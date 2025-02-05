import { Router } from "express";
import { StudentData } from "../../public/data/data.js";
import { userServing } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";

const router= Router();

function serve(data){
    router.route(data.servename).get(userServing(data))
}

async function f1(){
    const users = await User.find(); // Fetch data from MongoDB
    users.forEach(user => {
    serve(user);
}
)}
f1()
export default router;