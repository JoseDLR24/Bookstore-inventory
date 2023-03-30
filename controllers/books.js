const express = require("express");
const router = express.Router();

const books = require("../models/book.js");

// GET: /books/create - show new book form to add a new book
router.get("/", async (req, res) => {
  try {
    let bookslist = await books.find();
    res.render("books", { bookslist });
  } catch (error) {}
});

// GET: /books/create - show new book form to add a new book
router.get("/create", (req, res) => {
  res.render("books/create", {});
});

/* POST: Submit form data to mongodb */
router.post("/create", async (req, res) => {
  try {
    await books.create(req.body);
    console.log("data cretaed!!!!!");
    res.redirect("/books");
  } catch (error) {
    console.log(error);
    res.redirect("books/?error=pailas");
  }
});

module.exports = router;
