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