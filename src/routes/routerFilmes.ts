import { Router } from "express"
import { creatFilme, getAllFilme, DeleteFilme, UpdateFilme } from "../controllers/filmes-controllers.js"

const routertasks = Router()

routertasks.post("/filmes", creatFilme)
routertasks.get("/filmes", getAllFilme)
routertasks.delete("/filmes", DeleteFilme)
routertasks.patch("/filmes", UpdateFilme)

export default routertasks
