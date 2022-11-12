import { Request, Response } from "express"
import { Filme, FilmeFilter, FilmeFilterDeleted, FilmeFilterUpdate } from "../protocols/filmes.js"
import { FilmeSchema, FilmeFilterSchema, FilmeFilterDeletedSchema, FilmeFilterUpdatedSchema } from "../schemas/filmes-schema.js"
import { inserted, findMany, findFilter, deletedFilme, updatedFilme } from "../repository/filmes-repository.js"

async function creatFilme(req: Request, res: Response){
    
    const newFilme = req.body as Filme
    
    const { error } = FilmeSchema.validate(newFilme)
    if(error){
        return res.status(400).send({message: error.message})
    }

    const result = await inserted(newFilme)
    return res.status(201).send(`Filme inserted ${result.rowCount}`)
}

async function getAllFilme(req: Request, res: Response){

    const category = req.query as FilmeFilter
    
    const { error } = FilmeFilterSchema.validate(category)
    if(error){
        return res.status(400).send({message: error.message})
    }

    if(Object.keys(category).length !== 0) {
        const resp = await findFilter(category)
        return res.status(200).send(resp.rows)
    }

    const result = await findMany()
    return res.status(200).send(result.rows)
}


async function DeleteFilme(req: Request, res: Response){

    const filme = req.body as FilmeFilterDeleted
    
    const { error } = FilmeFilterDeletedSchema.validate(filme)
    if(error){
        return res.status(400).send({message: error.message})
    }

    const result =await deletedFilme(filme)
    return res.status(200).send(`Filmes deleted ${result.rowCount}`)
}

async function UpdateFilme(req: Request, res: Response) {
    const filme = req.body as FilmeFilterUpdate

    const { error } = FilmeFilterUpdatedSchema.validate(filme)
    if(error){
        return res.status(400).send({message: error.message})
    }

    const result = await updatedFilme(filme)
    return res.status(200).send(`Filmes updated ${result.rowCount}`)
}


export { 
    creatFilme, 
    getAllFilme,
    DeleteFilme,
    UpdateFilme
}






