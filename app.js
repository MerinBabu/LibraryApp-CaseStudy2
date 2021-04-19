const express = require("express");
const app = new express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.vfcnk.mongodb.net/LibraryApp?retryWrites=true&w=majority");
const port = process.env.PORT || 5010

// const nav = [
//     { link: "/books", name: "Books" },
//     { link: "/authors", name: "Author" },
//     { link: "/auth/signup", name: "Sign Up" },
//     { link: "/auth/login", name: "Log In" },
//     { link: "/admin", name: "Add Books" },
//     { link: "/addAuthor", name: "Add Authors" }
// ];

const nav = [
    // { link: '/', name: 'Home' },
    { link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    { link: '/admin/addbook', name: 'Add Book' },
    { link: '/admin/addauthor', name: 'Add Author' },
    { link: '/login', name: 'Sign In' },
    { link: '/signup', name: 'Sign Up' },

];

const booksRouter = require("./src/routes/bookRoutes")(nav); //passing nav from app.js to bookRoutes.js
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const authRouter = require("./src/routes/authRoutes")(nav);
// const addBookRouter = require("./src/routes/addBookRoutes")(nav);
const welcomeRouter = require('./src/routes/welcomeRoutes')(nav);
const addAuthorRouter = require("./src/routes/addAuthorRoutes")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);
const signUpRouter = require('./src/routes/signUpRoutes')(nav);
const signInRouter = require('./src/routes/signInRoutes')(nav);


app.set("view engine", "ejs"); //setting template engine to ejs
app.set("views", "./src/views"); //telling html files or views lie are at this location
app.use(express.static("./public")); //express considers css,images and js files as static files. So we have to declare them as such with their location
app.use(express.urlencoded({ extended: true })); //for post requests
app.use('/', welcomeRouter);
app.use("/books", booksRouter); //telling app to use booksRouter for /books request
app.use("/authors", authorsRouter);
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/addAuthor", addAuthorRouter);
app.use('/signup', signUpRouter);
app.use('/login', signInRouter);



app.listen(port, () => { console.log("Server ready at " + port); });