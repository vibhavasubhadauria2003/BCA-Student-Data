import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
const registerUser=asyncHandler(async(req,res)=>{
    const {about,fullname,profession,dob,father_name,mother_name,user_location}=req.body;
    if(about===""&&fullname===""&&profession===""&&dob===""&&father_name===""&&mother_name===""&&user_location==="")
    {
        throw new ApiError(400,"All fiels are required")
    }

})
export {registerUser};