const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
    title: {type : String},
    genre: {
        type: String,
        required: true,
    },
    release_year: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
});

const Movie = mongoose.model('Movies', MovieSchema);

module.exports = Movie;