const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')
const chapterController = require('../controllers/chapterController')


router.get('/books', bookController.index)
router.post('/books', bookController.create)
router.get('/books/:bookId', bookController.show)
router.patch('/books/:bookId', bookController.update)
router.delete('/books/:bookId', bookController.delete)

router.get('/books/:bookId', chapterController.index)
router.get('/books/:bookId/chapters', chapterController.show)
router.delete('/books/:bookId/chapters', chapterController.delete)
router.patch('/books/:bookId/chapters', chapterController.update)
router.post('/books/:bookId/chapters', chapterController.create)

module.exports = router