const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');

const socketIo = require('socket.io');

const app = express();

// Middlewares Loaders
const findUserMiddleware = require('./middlewares/findUser.middleware');
const authUserMiddleware = require('./middlewares/authUser.middleware');

// Routes Loaders
const tasksRoutes = require('./routes/tasks.routes');
const registrationsRoutes = require('./routes/registrations.routes');
const sessionsRoutes = require('./routes/sessions.routes');
const catergoriesRoutes = require('./routes/catergories.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(expressSession({
    secret: ['1651sdfasdflkm€#67$&345', '65drgkjnshbdsfgvd!·"%&%'],
    saveUninitialized: false, // no guardar sesion sin valor
    resave: false // no guardar constantemente si no esta inicializada
}));

// Middlewares
app.use(findUserMiddleware);
app.use(authUserMiddleware);

// Routes definitions
app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.use(catergoriesRoutes);

app.get('/', (req, res) => {
    res.render('home', { user: req.user });
})

let server = app.listen(3000);
let io = socketIo(server); // Servidor de websockets
let usersCount = 0;

io.on('connection', function(socket) {
    usersCount++;

    io.emit('count_updated', { count: usersCount });

    // Recibir evento 'new_task'
    socket.on('new_task', function(data) {
        console.log(data);
        io.emit('new_task', data);
    });

    socket.on('disconnect', function() {
        usersCount--;
        io.emit('count_updated', { count: usersCount });
    });
});

// Socket Client
const client = require('./realtime/client');

process.on('SIGINT', function() { // evento de presionar Ctrl + C
    console.log('Server was disconnected!');
    process.exit(); // Elimina el servidor
});