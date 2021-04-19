const express = require('express');

const welcomeRouter = express.Router();

function router(nav) {


    welcomeRouter.get('/', (req, res) => {
        res.render("welcome", {
            nav,
            title: 'Welcome',

        });
    });

    return welcomeRouter;
}

module.exports = router;