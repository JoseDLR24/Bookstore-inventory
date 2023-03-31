const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('auth/register', { 
        title: 'Register',
        user: req.user
    });
});

router.get('/login', (req, res) => {
    res.render('auth/login', { 
        title: 'Login',
        user: req.user
    });
});

router.post('/login', (req, res) => {
    const {username, password} = request.body;
    if (username && password) {
        if (req.session.user) {
            res.send(req.session.user);
        } else {
            req.session.user = {
                username,
            };
            res.send(req.session);
        } 
    }
})

module.exports = router;