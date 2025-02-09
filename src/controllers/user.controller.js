import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

let lastClickedStudent = null;
const userClickRequest=asyncHandler(async(req,res)=>{
    const {name}=req.body;
    console.log(`name is ${name}`);
    const fullname=name;
    const user=await User.findOne({fullname});
    if(!user)
    {
        console.log("user not found");
    }
    lastClickedStudent=user
    console.log(user);
})
const userServing=await asyncHandler(async(req,res)=>{
    res.render('index',lastClickedStudent);
})

export {userServing,userClickRequest};