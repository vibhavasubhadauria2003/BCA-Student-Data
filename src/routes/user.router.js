import { Router } from "express";
import { StudentData } from "../../public/data/data.js";
import { userServing } from "../controllers/user.controller.js";

const router= Router();

function serve(data){
    router.route(data.servename).get(userServing(data))
}

StudentData.forEach(element => {
    serve(element);
});
export default router;