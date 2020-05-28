const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
    name: 'session', // nombre del campo donde se almacenaran
    keys: ['adgjnadjgnadlgn', 'gbaldgbsdkgbafdgbmdj'] // Firmas para las cookies
}));

app.get('/', function(req, res) {
    req.session.visits = req.session.visits || 0; // Si no hay nada guardado sea cero
    req.session.visits = req.session.visits + 1; // Incrementar
    res.send(`${req.session.visits} visist(s)`);
});

/* 
    # Cookies
    Retornan en las cabeceras:
    Set-Cookie : session=eyJ2aXNpdHMiOjd9; path=/; httponly
    Set-Cookie : session.sig=J2kxfCi-K373vsTEkNwJRr5vUHA; path=/; httponly
*/

app.listen(3000);