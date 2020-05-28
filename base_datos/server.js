const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('view engine', 'pug');


app.post('/pendientes', function(req, res) {
    // db.run("INSERT INTO tasks(description) VALUES(?)", req.body.description);
    res.send('Insercion finalizada');
});

app.listen(3000);

process.on('SIGINT', function() { // evento de presionar Ctrl + C
    console.log('Server was disconnected!');
    process.exit(); // Elimina el servidor
});