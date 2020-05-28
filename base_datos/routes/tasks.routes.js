const express = require('express');
const TasksController = require('../controllers/tasks.controller');

let router = express.Router();

router.route('/tasks')
    .get(TasksController.index)
    .post(TasksController.create);

router.get('/tasks/new', TasksController.new);

module.exports = router;