const Book = require('../models/Book')

const bookController = {
    index: (req, res) => {
        Book.find({})
            .then((books) => {
                res.send(books)
            })
    },
    show: (req, res) => {
        Book.findById(req.params.bookId).populate('chapters')
            .then((book) => {
                res.send(book)
            })
    },
    update: (req, res) => {
        Book.findByIdAndUpdate(req.params.bookId, req.body)
            .then((updatedBook) => {
                updatedBook.save()
                res.send(updatedBook)
            })
    },
    delete: (req, res) => {
        Book.findByIdAndDelete(req.params.bookId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Book.create(req.body)
            .then((book) => {
                res.send(book)
            })
    }
}

module.exports = bookController