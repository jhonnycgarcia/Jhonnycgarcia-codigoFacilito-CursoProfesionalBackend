const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('proyecto_backend');

db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255) )');

db.close();