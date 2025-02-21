import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const userServing=asyncHandler(async(req,res)=>{
    let {fullname}=req.params;
    fullname=fullname.replace("%20"," ");
    const user=await User.findOne({fullname});
    if(!user)
    {
        console.log("user not found");
    }
    res.render('index',user);
})

export {userServing};