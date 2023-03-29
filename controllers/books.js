const express = require('express');
const router = express.Router();

// GET: /books/create => show new book form to add a new book
router.get('/create', (req,res) => {
    res.render('books/create', {

    });
});

module.exports = router;