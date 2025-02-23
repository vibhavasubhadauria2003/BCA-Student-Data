import { Router } from "express";
import { userServing,deleteUser } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";

const router= Router();

router.route("/:username").get(userServing);
router.route("/delete/:username").get(deleteUser);

export default router;