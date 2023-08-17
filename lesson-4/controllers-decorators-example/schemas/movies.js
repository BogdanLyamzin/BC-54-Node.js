const Joi = require("joi");

const movieAddSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": `"title" must be exist`
    }),
    director: Joi.string().required(),
})

module.exports = {
    movieAddSchema,
}