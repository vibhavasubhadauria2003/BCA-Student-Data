import { asyncHandler } from "../utils/asyncHandler.js";

const userServing=(data)=>asyncHandler(async(req,res)=>{
    const queryData = req.body;

    res.render('index',data);
})

export {userServing};