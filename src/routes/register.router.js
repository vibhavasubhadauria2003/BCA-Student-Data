import { Router } from "express";
import { registerUser,registerServing } from "../controllers/registerUser.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router= Router();

router.route("/register").get(registerServing);
router.route("/submit").post(
    upload.fields([
        {
            name:"profileImage",
            maxCount: 1
        }
    ]),
    registerUser)

export default router;