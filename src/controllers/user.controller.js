import { asyncHandler } from "../utils/asyncHandler.js";

const userServing=(data)=>asyncHandler(async(req,res)=>{
    res.render('index',data);
})

export {userServing};