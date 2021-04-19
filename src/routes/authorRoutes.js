const express = require("express");
const authorsRouter = express.Router(); // new router for books alone; in first method we used app to make router for books
const Authordata = require("../models/authorData");

function router(nav) {

    // var authors = [{
    //         name: "Benyamin",
    //         best_book: "Goat Days",
    //         genre: "Drama",
    //         img: "benyamin.jpg"

    //     },
    //     {
    //         name: "J K Rowling",
    //         best_book: "Harry Potter",
    //         genre: "Fiction",
    //         img: "rowling.jpg"
    //     },
    //     {
    //         name: "Joseph Barbara",
    //         best_book: "Tom and Jerry",
    //         genre: "Cartoon",
    //         img: "joseph.jpg"


    //     }
    // ];
    authorsRouter.get("/", function(req, res) { //first method for books(or any) router
        Authordata.find()
            .then(function(authors) {
                res.render("authors", {

                    nav,
                    title: "Authors",
                    authors
                });
            })

    });

    authorsRouter.get("/:id", function(req, res) { //first method for books(or any) router
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function(author) {
                res.render("author", {

                    nav,
                    title: "author",
                    author
                });
            })

    });

    return authorsRouter;
}


module.exports = router;