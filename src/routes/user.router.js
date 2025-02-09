import { Router } from "express";
import { StudentData } from "../../public/data/data.js";
import { userClickRequest,userServing } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";

const router= Router();

router.route("/user-reseve").post(userClickRequest)

router.route("/user").get(userServing)

export default router;