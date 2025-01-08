import { StudentData } from "../../data.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const menuServing=asyncHandler(async(req,res)=>{
    res.render('menu',{ StudentData: StudentData }); 
})

export {menuServing};