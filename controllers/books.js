const express = require("express");
const router = express.Router();

const books = require("../models/book.js");

// GET: /books/create - show new book form to add a new book creating a variable 'booklist' that will contain all the books added to the inventory using the fin() function.
router.get("/", async (req, res) => {
  try {
    let bookslist = await books.find();
    res.render("books", { bookslist });
  } catch (error) {}
});

// GET: /books/create - displays the page of the form
router.get("/create", (req, res) => {
  res.render("books/create", {});
});

/* POST: Submit form data to mongodb usign async await */
router.post("/create", async (req, res) => {
  try {
    await books.create(req.body);
    console.log("data created!!!");
    res.redirect("/books");
  } catch (error) {
    console.log(error);
    // we can see that we have an error when it redirect the user.
    res.redirect("books/?error=there was an error, please check");
  }
});

// here it will delete the selected employer selecting the id of it. does not need to load a new page just runs the snippet below
router.get('/delete/:_id', (req, res) => {
  books.remove({ _id: req.params._id }, (err) => {
      if (err) {
          console.log(err);
      }
      else {
          res.redirect('/books');
          // console message to keep track of errors
          console.log('There was an issue at the moment to delete this book, please check before you continue on the application')
      }
  });
});

module.exports = router;
