import { Router } from "express";
import { menuServing } from "../controllers/menu.controller.js";
const router= Router();

router.route("/menu").get(menuServing);
export default router;