import { FilmeSchema } from "../schemas/filmes-schema.js";
function creatTask(req, res) {
    var newTask = req.body;
    var error = FilmeSchema.validate(newTask).error;
    if (error) {
        return res.status(400).send({ message: error.message });
    }
    return res.status(201).send(newTask);
}
export { creatTask };
