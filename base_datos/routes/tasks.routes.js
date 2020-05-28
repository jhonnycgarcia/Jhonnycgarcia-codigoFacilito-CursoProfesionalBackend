const express = require('express');
const TasksController = require('../controllers/tasks.controller');

let router = express.Router();

router.route('/tasks')
    .get((req, res) => {
        res.send('Hola Mundo! - Get')
    })
    .post(TasksController.create);

module.exports = router;