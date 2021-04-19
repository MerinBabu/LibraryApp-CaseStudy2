const express = require('express');
const signupRouter = express.Router();
const Userdata = require('../models/signupData');

function router(nav) {

    signupRouter.get('/', (req, res) => {
        res.render("signup", {
            nav,
            title: 'Sign Up',
        });
    });

    signupRouter.post('/add', (req, res) => {
        var user = {
            name: req.body.name,
            email: req.body.useremail,
            phoneno: req.body.phonenumber,
            pwd: req.body.password,
        }
        var user = Userdata(user);
        user.save();
        res.redirect('/login')
    })

    return signupRouter;
}

module.exports = router;