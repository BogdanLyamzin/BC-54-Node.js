const fs = require("fs/promises");

const Movie = require("../models/Movie");

const { HttpError, cloudinary } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const getAll = async (req, res) => {
    const {_id: owner} = req.user;
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await Movie.find({owner}, "-createdAt -updatedAt", {skip, limit}).populate("owner", "name");
    res.json(result);
}

const getById = async (req, res) => {
    const { id } = req.params;

    const result = await Movie.findById(id);
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(result);
}

const add = async (req, res) => {
    const {_id: owner} = req.user;
    const {path: filePath} = req.file;
    const {url: poster} = await cloudinary.uploader.upload(filePath, {
        folder: "posters"
    })
    await fs.unlink(filePath);
    const result = await Movie.create({...req.body, poster, owner});

    res.status(201).json(result);
}

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Movie.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(result);
}

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const result = await Movie.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(result);
}

const deleteById = async (req, res) => {
    const { id } = req.params;
    const result = await Movie.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json({
        message: "Delete success"
    })
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    updateFavorite: ctrlWrapper(updateFavorite),
    deleteById: ctrlWrapper(deleteById),
}