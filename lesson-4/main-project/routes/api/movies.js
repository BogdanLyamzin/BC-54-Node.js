const express = require("express");
const Joi = require("joi");

const moviesService = require("../../models/movies");

const {HttpError} = require("../../helpers");

const router = express.Router();

const movieAddSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": `"title" must be exist`
    }),
    director: Joi.string().required(),
})

router.get("/", async(req, res, next)=> {
    try {
        const result = await moviesService.getAllMovies();

        res.json(result);
    }
    catch(error) {
        next(error);
    }
})

router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await moviesService.getMovieById(id);
        if(!result) {
            throw HttpError(404, `Movie with id=${id} not found`);
            // const error = new Error(`Movie with id=${id} not found`);
            // error.status = 404;
            // throw error;
            // return res.status(404).json({
            //     message: "Not Found"
            // })
        }

        res.json(result);
    }
    catch(error) {
        next(error);
    }
})

router.post("/", async(req, res, next)=> {
    try {
        const {error} = movieAddSchema.validate(req.body);
        if(error) {
            throw HttpError(400, error.message);
        }
        const result = await moviesService.addMovie(req.body);

        res.status(201).json(result);
    }
    catch(error) {
        next(error);
    }
})

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = movieAddSchema.validate(req.body);
        if(error) {
            throw HttpError(400, error.message);
        }

        const {id} = req.params;
        const result = await moviesService.updateMovieById(id, req.body);
        if(!result) {
            throw HttpError(404, `Movie with id=${id} not found`);
        }

        res.json(result);
    }
    catch(error){
        next(error);
    }
})

router.delete("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await moviesService.deleteById(id);
        if(!result) {
            throw HttpError(404, `Movie with id=${id} not found`);
        }

        // res.status(204).send()
        res.json({
            message: "Delete success"
        })
    }
    catch(error) {
        next(error);
    }
})

module.exports = router;