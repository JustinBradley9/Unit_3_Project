const Chapter = require('../models/Chapter')
const Book = require('../models/Book')

const chapterController = {
    index: (req, res) => {
        var bookId = req.params.bookId
        Book.findById(bookId).populate('chapters')
 .then((book) => {
     res.send(book.chapters)
 })
    },
    show: (req, res) => {
        var chapterId = req.params.chapterId
        Chapter.findById(chapterId)
 .then((chapter) => {
     res.send(chapter)
 })
    },
    delete: (req, res) => {
        var chapterId = req.params.chapterId
        Chapter.findByIdAndDelete(chapterId)
 .then(() => {
     res.send(200)
 })
    },
    update: (req, res) => {
        var chapterId = req.params.chapterId
        Chapter.findByIdAndUpdate(chapterId, req.body, { new: true })
 .then((editChapter) => {
     editChapter.save()
     res.send(editChapter)
 })
    },
    create: (req, res) => {
        var bookId = req.params.bookId
        Book.findById(bookId)
 .then((book) => {
     console.log(book)
     Chapter.create(req.body)
         .then((newChapter) => {
  console.log(newchapter)
  book.chapters.push(newChapter)
  book.save()
  res.send(newChapter)
         })
 })
    }

}

module.exports = chapterController