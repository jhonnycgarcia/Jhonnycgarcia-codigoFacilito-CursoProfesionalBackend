const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Controllers
const tasksController = require('./controllers/tasks.controller');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');


app.get('/tasks', tasksController.home);

app.post('/pendientes', function(req, res) {
    res.send('Insercion finalizada');
});

app.listen(3000);

process.on('SIGINT', function() { // evento de presionar Ctrl + C
    console.log('Server was disconnected!');
    process.exit(); // Elimina el servidor
});