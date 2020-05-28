const express = require('express');
const TasksController = require('../controllers/tasks.controller');

let router = express.Router();

router.route('/tasks')
    .get(TasksController.index)
    .post(TasksController.create);

router.get('/tasks/new', TasksController.new);

router.get('/tasks/:id/edit', TasksController.edit);

// Wildcard: parametros que cambian dentro de la URL
router.route('/tasks/:id')
    .get(TasksController.show)
    .put(TasksController.update)
    .delete(TasksController.destroy);

module.exports = router;