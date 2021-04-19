const express = require("express");
const booksRouter = express.Router(); // new router for books alone; in first method we used app to make router for books
const Bookdata = require("../models/bookData");

function router(nav) {

    // var books = [{
    //         title: "Goat Days",
    //         author: "Benyamin",
    //         genre: "Drama",
    //         img: "goat_days.jpg"

    //     },
    //     {
    //         title: "Harry Potter",
    //         author: "J K Rowling",
    //         genre: "Fiction",
    //         img: "harry_potter.jpg"
    //     },
    //     {
    //         title: "Tom and Jerry",
    //         author: "Joseph Barbara",
    //         genre: "Cartoon",
    //         img: "tom_jerry.jpg"


    //     }
    // ];
    booksRouter.get("/", function(req, res) { //first method for books(or any) router
        Bookdata.find()
            .then(function(books) {
                res.render("books", {

                    nav,
                    title: "Books",
                    books
                });
            })

    });

    booksRouter.get("/:id", function(req, res) { //first method for books(or any) router
        const id = req.params.id;
        Bookdata.findOne({ _id: id })
            .then(function(book) {
                res.render("book", {

                    nav,
                    title: "Book",
                    book
                });
            })

    });

    return booksRouter;
}


module.exports = router;