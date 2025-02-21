import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerServing=asyncHandler(async(req,res)=>{
    res.render('register'); 
})

const registerUser=asyncHandler(async(req,res)=>{
    const {about,fullname,profession,dob,father_name,mother_name,user_location}=req.body;
    if(about===""||fullname===""||profession===""||dob===""||father_name===""||mother_name===""||user_location==="")
    {
        throw new ApiError(400,"All fields are required")
    }
    const existedUser=await User.findOne({$and: [{fullname},{dob}]});
    
    if(existedUser){
        throw new ApiError(409,"User allready exists");
    }
    let xfullname=`${fullname} `;
    const servename=`/${xfullname.slice(0,xfullname.indexOf(" "))}`;
    console.log(servename);
    const profileImagePath=req.files?.profileImage[0]?.path;
    if(!profileImagePath){
        throw new ApiError(400,"Profile Image file file is required");
    }
    const profileImage= await uploadOnCloudinary(profileImagePath);
    
    if(!profileImage){
        throw new ApiError(400,"Cloudinary Profile Image link is unavilable");
    }
    const user=await User.create({
        servename,
        profileImage:profileImage.url,
        about,
        fullname,
        profession,
        dob,
        father_name,
        mother_name,
        user_location
    })

    const createdUser = await User.findById(user._id);
    if(!createdUser){
        throw new ApiError(500,"Error while registering on DB");
    }
    console.log(createdUser)
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Created on DB")
    )
})
export {registerUser,registerServing};