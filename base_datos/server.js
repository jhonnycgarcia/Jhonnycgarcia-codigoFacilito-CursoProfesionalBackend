const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// Routes Loaders
const tasksRoutes = require('./routes/tasks.routes');
const registrationsRoutes = require('./routes/registrations.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

// Routes definitions
app.use(tasksRoutes);
app.use(registrationsRoutes);

app.listen(3000);

process.on('SIGINT', function() { // evento de presionar Ctrl + C
    console.log('Server was disconnected!');
    process.exit(); // Elimina el servidor
});