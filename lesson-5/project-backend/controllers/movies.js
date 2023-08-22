const Movie = require("../models/Movie");

const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const getAll = async (req, res) => {
    const result = await Movie.find();
    res.json(result);
}

// const getById = async (req, res) => {
//     const { id } = req.params;
//     const result = await moviesService.getMovieById(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     res.json(result);
// }

// const add = async (req, res) => {
//     const result = await moviesService.addMovie(req.body);

//     res.status(201).json(result);
// }

// const updateById = async (req, res) => {
//     const { id } = req.params;
//     const result = await moviesService.updateMovieById(id, req.body);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     res.json(result);
// }

// const deleteById = async (req, res) => {
//     const { id } = req.params;
//     const result = await moviesService.deleteById(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     // res.status(204).send()
//     res.json({
//         message: "Delete success"
//     })
// }

module.exports = {
    getAll: ctrlWrapper(getAll),
    // getById: ctrlWrapper(getById),
    // add: ctrlWrapper(add),
    // updateById: ctrlWrapper(updateById),
    // deleteById: ctrlWrapper(deleteById),
}