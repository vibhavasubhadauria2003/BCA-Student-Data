import { Router } from "express";
import { userClickRequest,userServing } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";

const router= Router();

router.route("/user-reseve").post(userClickRequest)

router.route("/user").get(userServing)

export default router;