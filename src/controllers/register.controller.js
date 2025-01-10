import { asyncHandler } from "../utils/asyncHandler.js";

const registerServing=asyncHandler(async(req,res)=>{
    res.render('register'); 
})

export {registerServing};