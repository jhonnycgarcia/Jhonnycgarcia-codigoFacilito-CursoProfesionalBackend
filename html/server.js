const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('./assets', {
    etag: false,
    maxAge: '5h'
}));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);

/* 
# ETAG - para la gestion de los archivos en cache
    Cuando esta habilitado al servir dicho archivo se genera codigo
    Este se utiliza para verificar si el archivo esta vigente o no
    En caso de no estarlo, simplemente se renueva. Con esta estrategia
    se envia constantemente una peticion al servidor para validar el 
    estatus de archivo.

    Se recibe: 
    ETag : W/"55-17258070124"

    El servidor evalua:
    If-None-Match: W/"55-17258070124" 

    Y responde: 304 el archivo esta vigente 

    # MaxAge - Establece el tiempo de vigencia del archivo estatico
    Con esta metodologia se asigna un tiempo de vigencia para el archivo estatico
    y mientras este tiempo no transcurra el archivo no dejara de estar vigente.
    El inconveniente con esta metodologia es que si el archivo ya caduco el nagevador
    no intentara solicitar uno nuevo hasta que el tiempo caduque.

    valor Maximo: 1 año

    Se recibe:
    Cache-Control : public, max-age=18000

    link- https://github.com/vercel/ms
*/