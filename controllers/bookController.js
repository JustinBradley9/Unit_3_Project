Book = require("../models/Book")
Character = require("../models/Character")


const BookController = {
    index: (req, res) => {
        Book.find({}).then(books => {
            res.render('apps/index', { books})
        })
    },
    new: (req, res) => {
        res.render("apps/new")
    },
    create: (req, res) => {
        console.log(req.body)
        Book.create({
            title: req.body.title,
            author: req.body.author,
            bookPic: req.body.bookPic,
            chapters: req.body.chapters

        }).then(newBook => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
      const BookId = req.params.id
      Book.findById(BookId).populate('characters').then((Book) => {
        console.log(Book)
        res.render('apps/show', { Book })
      })
    },
    edit: (req, res) => {
        const BookId = req.params.id
        // console.log(BookId)
        res.render('apps/edit', {BookId})
    },
    update: (req, res) => {
        const BookId = req.params.id
        Book.findByIdAndUpdate(BookId, req.body, {new: true}).then(() => {
            res.redirect(`/${BookId}`)
        })
    },
    delete: (req, res) => {
        const BookId = req.params.id
        Book.findByIdAndRemove(BookId).then(() => {
            res.redirect('/')
        })
    }
}



module.exports = BookController