const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../models/bookData");
const Authordata = require("../models/authorData");

function router(nav) {

    adminRouter.get("/addbook", function(req, res) {
        res.render("addBook", {
            nav,
            title: "Add Book"
        })
    });

    adminRouter.post("/add-book", function(req, res) {
        // var item = {
        //     bookname: req.query.bookname,
        //     authorname: req.query.authorname,           //for get requests
        //     genre: req.query.genre,
        //     image: req.query.image
        // }

        var item = {
            title: req.body.bookname,
            author: req.body.authorname,
            genre: req.body.genre,
            image: req.body.image
        }

        var book = Bookdata(item);
        book.save(); //saving to collection
        res.redirect("/books");
        res.send("Hey I am added");

    });

    adminRouter.get("/addauthor", function(req, res) {
        res.render("addAuthor", {
            nav,
            title: "Add Author"
        })
    });

    adminRouter.post("/add-author", function(req, res) {
        // var item = {
        //     bookname: req.query.bookname,
        //     authorname: req.query.authorname,           //for get requests
        //     genre: req.query.genre,
        //     image: req.query.image
        // }

        var item = {
            authorname: req.body.authorname,
            bestbookname: req.body.bestbookname,
            image: req.body.image
        }

        var author = Authordata(item);
        author.save(); //saving to collection
        res.redirect("/authors");
        res.send("Hey I am added");

    });

    adminRouter.get('/deleteauthor/:id', (req, res) => {
        const id = req.params.id;
        Authordata.findByIdAndRemove({ _id: id }, (err, catData) => {
            if (err) {
                console.log(err)
            } else {
                res.redirect("/authors");
                res.status(200).send(catData)
            }
        });

    })


    return adminRouter;
}

module.exports = router;


// const express = require('express');
// const adminRouter = express.Router();
// const Bookdata = require('../models/bookData');
// // const Authordata = require('../model/Authordata');

// function router(nav) {

//     adminRouter.get('/', (req, res) => {
//         res.render("admin", {
//             nav,
//             navsize: '5',
//             title: 'Admin | Library App',
//             head: 'Administrator',
//             user: 'admin'
//         });
//     });


//     adminRouter.get('/books', (req, res) => {
//         Bookdata.find()
//             .then(function(books) {
//                 res.render("books", {
//                     nav,
//                     navsize: '5',
//                     title: 'Books | Library App',
//                     head: 'Books',
//                     user: 'admin',
//                     books,
//                     updel: { up: 'Update', del: 'Delete' }
//                 });
//             })
//     })

//     adminRouter.get('/books/:id', (req, res) => {
//         const id = req.params.id;
//         Bookdata.findOne({ _id: id })
//             .then(function(book) {
//                 res.render('book', {
//                     nav,
//                     navsize: '5',
//                     title: 'Book | Library App',
//                     head: 'Book',
//                     user: 'admin',
//                     book
//                 });
//             })
//     })

//     adminRouter.get('/deletebook/:id', (req, res) => {
//         const id = req.params.id;
//         Bookdata.deleteOne({ _id: id })
//             .then(function(books) {
//                 res.render('books', {
//                     nav,
//                     navsize: '5',
//                     title: 'Book | Library App',
//                     head: 'Book Deleted',
//                     user: 'admin',
//                     books
//                 });
//             })
//     })

//     adminRouter.get('/authors', (req, res) => {
//         Authordata.find()
//             .then(function(authors) {
//                 res.render("authors", {
//                     nav,
//                     navsize: '5',
//                     title: 'Authors | Library App',
//                     head: 'Authors',
//                     user: 'admin',
//                     authors,
//                     updel: { up: 'Update', del: 'Delete' }
//                 });
//             })
//     })

//     adminRouter.get('/authors/:id', (req, res) => {
//         const id = req.params.id;
//         Authordata.findOne({ _id: id })
//             .then(function(author) {
//                 res.render('author', {
//                     nav,
//                     navsize: '5',
//                     title: 'Author | Library App',
//                     head: 'Author',
//                     user: 'admin',
//                     author
//                 });
//             })
//     })



//     return adminRouter;
// }

// module.exports = router;