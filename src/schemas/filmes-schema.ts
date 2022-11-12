import Joi from "joi"

export const FilmeSchema = Joi.object({
    name: Joi.string().required(), 
    description: Joi.string().required(), 
    category: Joi.string().required()
})

export const FilmeFilterSchema = Joi.object({
    category: Joi.string()
})

export const FilmeFilterDeletedSchema = Joi.object({
    filme: Joi.string()
})


export const FilmeFilterUpdatedSchema = Joi.object({
    filme: Joi.string().required(),
    filmeupdate: Joi.string().required()
})