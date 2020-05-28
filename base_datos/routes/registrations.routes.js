const express = require('express');
const RegistrationsController = require('../controllers/registrations.controller');

let router = express.Router();

router.get('/signup', RegistrationsController.new);

module.exports = router;