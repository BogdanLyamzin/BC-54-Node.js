const express = require("express");

const ctrl = require("../../controllers/movies");

const {validateBody} = require("../../decorators");

const {authenticate, isValidId} = require("../../middlewares");

const schemas = require("../../schemas/movies");

const addMovieValidate =  validateBody(schemas.movieAddSchema);
const updateMovieFavoriteValidate =  validateBody(schemas.movieUpdateFavoriteSchema);

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", addMovieValidate, ctrl.add);

router.put("/:id", isValidId, addMovieValidate, ctrl.updateById);

router.patch("/:id/favorite", isValidId, updateMovieFavoriteValidate, ctrl.updateFavorite);

router.delete("/:id",  isValidId, ctrl.deleteById);

module.exports = router;