import { Router } from "express";
import { userServing } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";

const router= Router();

router.route("/:fullname").get(userServing)

export default router;