import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary,deleteOnCloudinary} from "../utils/cloudinary.js";
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
    let xfullname=`${fullname}_${dob}`;
    const username=xfullname.replaceAll(' ','_');
    console.log(username);
    const existedUser=await User.findOne({username});
    
    if(existedUser){
        throw new ApiError(409,"User allready exists");
    }
    const profileImagePath=req.files?.profileImage[0]?.path;
    if(!profileImagePath){
        throw new ApiError(400,"Profile Image file file is required");
    }
    console.log(profileImagePath);
    const profileImage= await uploadOnCloudinary(profileImagePath);
    console.log(profileImage);
    if(!profileImage){
        throw new ApiError(400,"Cloudinary Profile Image link is unavilable");
    }
    try {
        const user=await User.create({
            username:username,
            profileImage:profileImage.url,
            about,
            fullname,
            profession,
            dob,
            father_name,
            mother_name,
            user_location
        })
        if(!user){
            throw new ApiError(500,"Error while registering on DB");
        }
        console.log(user);
        const createdUser = await User.findById(user._id);
        if(!createdUser){
            throw new ApiError(500,"Error while registering on DB");
        }
        return res.redirect('/menu');
    } catch (error) {
        await deleteOnCloudinary(profileImage.public_id);
        if (error.code === 11000) {
            
            throw new ApiError(409, "Not regestering User already exists");
          }
        throw new ApiError(500,"Error while registering on DB");
        
    }
    // .json(new ApiResponse(201, "User registered successfully", createdUser));
})
export {registerUser,registerServing};