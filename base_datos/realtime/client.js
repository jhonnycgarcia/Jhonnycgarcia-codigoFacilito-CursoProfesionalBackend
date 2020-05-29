const io = require('socket.io-client');

let host = 'http://localhost:3000';
if (process.env.NODE_ENV && process.env.NODE_ENV == 'production') { // si se encuentra en entorno de producion
    // cambiar host
    host = 'https://blooming-inlet-55842.herokuapp.com'
}

let socket = io.connect(host, { reconnect: true });

socket.on('connect', function() {
    console.log("\n\nSocket connected from NodeJs\n\n");
});

module.exports = socket;