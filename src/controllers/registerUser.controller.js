import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
const registerUser=asyncHandler(async(req,res)=>{
    const {about,fullname,profession,dob,father_name,mother_name,user_location}=req.body;
    if(about===""||fullname===""||profession===""||dob===""||father_name===""||mother_name===""||user_location==="")
    {
        throw new ApiError(400,"All fields are required")
    }
    // const existedUser=User.findOne({$or: [{fullname},{dob}]});
    
    // if(existedUser){
    //     throw new ApiError(409,"User allready exists");
    // }
    const profileImagePath=req.files?.profileImage[0]?.path;
    if(!profileImagePath){
        throw new ApiError(400,"Profile Image file file is required");
    }
    const profileImage= await uploadOnCloudinary(profileImagePath);
    
    if(!profileImage){
        throw new ApiError(400,"Cloudinary Profile Image link is unavilable");
    }

})
export {registerUser};