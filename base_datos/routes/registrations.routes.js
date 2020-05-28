const express = require('express');
const RegistrationsController = require('../controllers/registrations.controller');

let router = express.Router();

router.get('/signup', RegistrationsController.new);

router.route('/users')
    .post(RegistrationsController.create);

module.exports = router;