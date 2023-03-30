const mongoose = require('mongoose');

// create schema of a book document
const bookdb = new mongoose.Schema({
    title: {
        type: String,
        // required: 'Book title is required'
    },
    genre: {
        type: String,
        // required: 'Please enter the genre of the Book'
    },
    audiencetarget: {
        type: Number
    },
    synopsis: {
        type: String,
        // required: 'Please give a brief explanation of what this book is about'
    },
    datepublished: {
        type: Date,
        // required: 'Date published is required'
    }, 
    price: {
        type: Number,
        // required: 'Book price is required'
    }
});

module.exports = mongoose.model('books', bookdb);