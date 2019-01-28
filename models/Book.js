const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Book = new Schema({
    title: String,
    bookPic: String,
    author: String,
    description: String,
    chapters: [{
        type: Schema.Types.ObjectId,
        ref: 'Chapter'
    }]
});


module.exports = mongoose.model("Book", Book)