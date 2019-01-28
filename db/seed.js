
const Book = require('../models/Book')
const Chapter = require('../models/Chapter')



const chapter1 = new Chapter({
    title: "The beginning",
    chapterNumber: "1",
    plot: "We went to slay a dragon"
})
const chapter2 = new Chapter({
    title: "The end",
    chapterNumber: "2",
    plot: "It killed us all"
})
const mainBook = new Book({
    title: "Lord of evil",
    bookPic: "Don't got one",
    author: "Justin Bradley",
    description: "Story that will probably not be finished",
    chapters: [chapter1, chapter2]
})

Book.remove({})
    .then(() => Chapter.remove({}))
    .then(() => Chapter.insertMany([chapter1, chapter2]))
    .then(() => mainBook.save())
    .then(() => {
        console.log("Database saved succesfully")
        console.log(mainBook)
    })
