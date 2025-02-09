import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
const menuServing=asyncHandler(async(req,res)=>{
    try {
        const users = await User.find();
        res.render("menu", { users });
    } catch (error) {
        res.status(500).send("Error fetching users");
    }
})

export {
    menuServing
};