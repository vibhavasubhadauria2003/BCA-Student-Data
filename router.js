import { Router } from "express";
import { StudentData } from './data.js';

const router= Router();

function serve(data){
    router.route(data.servename).get((req,res)=>{
        res.render('index',data);
    })
}

StudentData.forEach(element => {
    serve(element);
});
export default router;