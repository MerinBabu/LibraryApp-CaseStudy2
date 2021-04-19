const express = require('express');
const signinRouter = express.Router();
const Userdata = require('../models/signupData');

function router(nav) {

    signinRouter.get('/', (req, res) => {
        res.render("login", {
            nav,
            title: 'Sign In',
        });
    });

    signinRouter.post('/validate', (req, res) => {
        var valid_data = {
            useremail: req.body.useremail,
            password: req.body.password
        }

        Userdata.findOne({ useremail: valid_data.useremail, password: valid_data.password })
            .then(function(userdata) {
                if (userdata != null) {
                    res.redirect('/index');
                } else {
                    res.redirect('/login');
                };
            });


    });

    return signinRouter;
}

module.exports = router;