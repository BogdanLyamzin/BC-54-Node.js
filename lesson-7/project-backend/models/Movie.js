const {Schema, model} = require("mongoose");

const {genreList, releaseYearRegexp} = require("../constants/movie-constants");

const {handleValidateError, runUpdateValidators} = require("./hooks");

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: genreList,
        required: true,
    },
    releaseYear: {
        type: String,
        match: releaseYearRegexp,
        required: true,
    }
}, {versionKey: false, timestamps: true});

movieSchema.post("save", handleValidateError);

movieSchema.pre("findOneAndUpdate", runUpdateValidators);

movieSchema.post("findOneAndUpdate", handleValidateError);

const Movie = model("movie", movieSchema);
// category => categories
// mouse => mice

module.exports = Movie;