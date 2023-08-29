const Joi = require("joi");

const {genreList, releaseYearRegexp} = require("../constants/movie-constants");

const movieAddSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": `"title" must be exist`
    }),
    director: Joi.string().required(),
    favorite: Joi.boolean(),
    genre: Joi.string().valid(...genreList).required(),
    releaseYear: Joi.string().pattern(releaseYearRegexp).required(),
})

const movieUpdateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

module.exports = {
    movieAddSchema,
    movieUpdateFavoriteSchema,
}