# ORM - Object Relational Mapping
Los desarrolladores backend usamos lo que se conocen como Object Relational Mapping, u ORM por sus siglas. Estas librerías se encargan de ofrecer clases y métodos para que podamos manipular la base de datos usando programación orientada a objetos.

Internamente, estos métodos se traducen a SQL para que las operaciones puedan ejecutarse sobre la base de datos. Además de eso, las instrucciones generadas por un ORM son usualmente seguras y optimizadas, esto porque los mejores ORM’s tienen años en desarrollo y son de código abierto, permitiendo que los mismos usuarios del ORM reporten y solucionen bugs, de modo que los resultados del ORM están en constante mejora.

## Sequelize-CLI
En este punto del curso se instala de manera global la libreria `sequelize-cli` para controlar la migracion de la data. Dentro de la linea de comandos se ejecuta `sequelize init`.

Dicho comando genera las siguientes rutas:
+ config: carpeta de configuracion para la conexion a la base de datos.
+ migratrions: se almacenaran las migraciones para modificar la base de datos.
+ models: donde se almacenaran los modelos de la base de datos.
+ seeders: para llenar la base de datos con datos de prueba.

## Generar modelos con el CLI de sequelize
Para generar un modelo utilizando el CLI es necesario desglosar enviar:
+ El nombre del modelo en singular con la primera letra en mayusculas.
+ Los atributos a guardar junto con el tipo de dato.

``` 
sequelize model:generate --name Task --attributes description:text
```
Luego de esto se generan dos archivos, uno en models y otro en migrations.
referencia: https://sequelize-mock.readthedocs.io/en/stable/

## Ejecutar migraciones
El comando es `sequelize db:migrate`, ejecutar este comando nos mostrara mensajes en la consola indicandonos el estado de la migracion. Al culminar se modificara la base de datos con las especificaciones realizadas en el modelo de la migracion.

Para revertir las migraciones basta con ejecutar `sequelize db:migrate:undo`

## Generar Seeders
Comando: `sequelize seed:generate --name generate_tasks`

Se genera un archivo en la ruta **seeders** en el cual se dictan dos instrucciones, _UP_ en el cual se establecen los criterios para cargar los datos y _DOWN_ para eliminar los datos anteriomente cargados.

## Ejecutar los Seeders
Comando insertar seeders: `sequelize db:seed:all`
Comando revertir insercion de seeders: `sequelize db:seed:undo`
Comando revertir todos los seeders: `sequelize db:seed:undo:all`

# REST
## Limitantes
1. La arquitectura cliente/servidor.
    + Separacion de responsabilidades entre ambas partes.
2. Que sea stateless
    + En la comunicacion no existe un contexto, entre el cliente y el servidor.
    + Cada peticion debe ser independiente y nunca dependera de peticiones anteriores.
4. Cacheability
    + Pisibilidad de almacenar respuestas en cache para mejorar los tiempos de respuesta.
5. Que el sistema pueda estar basado en capas.
    + Cada capa debe tener una responsabilidad unica y bien definida.
    + Cada capa debe ser independiente.
    + Solo puede comunicarse a traves de interfaces.
6. Que posea una interfaz uniforme.
    + Estandar en la interfaz de comunicacion entre los componentes.
    + Estandar en la interaccion entre el cliente y servidor.
7. Pueden enviar codigo on deman. (opcional)

## Verbos
+ **GET:** Consultar o busqueda recursos
+ **POST:** insercion de recursos.
+ **PUT _&_ PATCH:** mutacion de recursos (actualizacion, sustitucion y edicion).
    En la teoría, PUT se diferencía de PATCH, en que el primero indica que vamos a sustituir por completo un recurso, mientras que PATCH habla de actualizar algunos elementos del recurso mismo, sin sustituirlo por completo.

+ **DELETE:** destruccion o eliminacion de recursos.

Las rutas deben estar bien definidas
Ejemplo: `localhost:3000/tasks, con esta ruta se hace referencia al recurso **tasks** y se manipula a traves de los verbos _HTTP_