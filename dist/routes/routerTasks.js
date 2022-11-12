import { Router } from "express";
import { creatTask } from "../controllers/filmes-controllers.js";
var routertasks = Router();
routertasks.post("/tasks", creatTask);
export default routertasks;
