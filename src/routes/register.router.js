import { Router } from "express";
import { registerServing } from "../controllers/register.controller.js";
import { registerUser } from "../controllers/registerUser.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router= Router();

router.route("/register").get(registerServing);
router.route("/submit").post(
    upload.fields([
        {
            name:"profileImage"
        }
    ]),
    registerUser)

export default router;