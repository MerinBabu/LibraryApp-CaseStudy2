const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/library"); //connection format dbtype://portnumber/dbname
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.vfcnk.mongodb.net/LibraryApp?retryWrites=true&w=majority");
const Schema = mongoose.Schema;


//schema for a single book or single document

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String //since image name is string

});

var Bookdata = mongoose.model("bookdata", BookSchema); // bookdata is the collection name; it will appear on the database as its plural i.e bookdatas

module.exports = Bookdata;