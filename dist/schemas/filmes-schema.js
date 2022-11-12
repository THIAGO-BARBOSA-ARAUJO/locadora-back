import Joi from "joi";
export var FilmeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required()
});
