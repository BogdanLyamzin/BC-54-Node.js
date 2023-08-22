const express = require("express");

const ctrl = require("../../controllers/movies");

const {validateBody} = require("../../decorators");

const schemas = require("../../schemas/movies");

const addMovieValidate =  validateBody(schemas.movieAddSchema);

const router = express.Router();

router.get("/", ctrl.getAll);

// router.get("/:id", ctrl.getById)

// router.post("/", addMovieValidate, ctrl.add)

// router.put("/:id", addMovieValidate, ctrl.updateById)

// router.delete("/:id", ctrl.deleteById)

module.exports = router;