import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { deleteOnCloudinary } from "../utils/cloudinary.js";

const userServing=asyncHandler(async(req,res)=>{
    const {username}=req.params;
    const user=await User.findOne({username});
    if(!user)
    {
        throw new ApiError(404,"User not found");
    }
    // let date=user.dob.toISOString().split('T')[0];
    // user.dob=date;
    // await user.save({ validateBeforeSave: false });
    // console.log(user.dob," ",date);
    res.render('index',user);
});
const deleteUser=asyncHandler(async(req,res)=>{
    const {username}=req.params;
    const user=await User.findOneAndDelete({username}); 
    if(!user)
    {
        throw new ApiError(404,"User not found");
    }
    let parts=user.profileImage.split('/');
    const publicId=parts[parts.length-1].split('.')[0];
    await deleteOnCloudinary(publicId);  
    return res.redirect('/menu');
    // .json(new ApiResponse(200, "User deleted successfully", user));
});

export {userServing,deleteUser};