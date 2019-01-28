const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Chapter = new Schema({
    title: String,
    chapterNumber: Number,
    plot: String
});


module.exports = mongoose.model("Chapter", Chapter)