const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// let db = new sqlite3.Database('proyecto_backend'); // Establecer conexion con la DB
const sequelize = new Sequelize('proyecto_backend', null, null, {
    dialect: 'sqlite', // motor de DB
    storage: './proyecto_backend' // ubicacion del archivo
});

// db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255) )'); // Crear la tabla

app.post('/pendientes', function(req, res) {
    // db.run("INSERT INTO tasks(description) VALUES(?)", req.body.description);
    res.send('Insercion finalizada');
});

app.listen(3000);

process.on('SIGINT', function() { // evento de presionar Ctrl + C
    console.log('Server was disconnected!');
    process.exit(); // Elimina el servidor
});