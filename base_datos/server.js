const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');

const app = express();

// Middlewares
const findUserMiddleware = require('./middlewares/findUser.middleware');

// Routes Loaders
const tasksRoutes = require('./routes/tasks.routes');
const registrationsRoutes = require('./routes/registrations.routes');
const sessionsRoutes = require('./routes/sessions.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(expressSession({
    secret: ['1651sdfasdflkm€#67$&345', '65drgkjnshbdsfgvd!·"%&%'],
    saveUninitialized: false, // no guardar sesion sin valor
    resave: false // no guardar constantemente si no esta inicializada
}));

app.use(findUserMiddleware);

// Routes definitions
app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);

app.get('/', (req, res) => {
    res.render('home', { user: req.user });
})

app.listen(3000);

process.on('SIGINT', function() { // evento de presionar Ctrl + C
    console.log('Server was disconnected!');
    process.exit(); // Elimina el servidor
});