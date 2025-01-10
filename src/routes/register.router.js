import { Router } from "express";
import { registerServing } from "../controllers/register.controller.js";
const router= Router();

router.route("/register").get(registerServing);
router.route("/register").post()

export default router;