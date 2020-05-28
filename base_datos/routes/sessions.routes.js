const express = require('express');
const SessionsController = require('../controllers/sessions.controller');

let router = express.Router();

router.route('/sessions')
    .get(SessionsController.new)
    .post(SessionsController.create)
    .delete(SessionsController.destroy);

module.exports = router;