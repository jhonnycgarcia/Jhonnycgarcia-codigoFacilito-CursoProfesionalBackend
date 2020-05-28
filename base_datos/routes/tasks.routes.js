const express = require('express');
let router = express.Router();

router.route('/tasks')
    .get((req, res) => {
        res.send('Hola Mundo! - Get')
    })
    .post((req, res) => {
        res.send('Hola Mundo! - Post')
    });

module.exports = router;