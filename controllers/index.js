const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'The Bookkeeper' 
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'The BookKeeper',
    desc: 'Welcome to our bookstore inventory management system! Our application is built using MongoDB, Express.js, HBS view engine, and Node.js, which enables us to provide a user-friendly interface for managing your bookstore inventory. Our system allows you to perform CRUD operations, which means you can easily create, read, update, and delete books in your inventory. With our system, you can efficiently manage your stock, track sales, and generate reports to help you make data-driven decisions. We are committed to providing a seamless experience for bookstore owners and managers, and we are constantly improving our application to meet your needs.'
  });
});

module.exports = router;
