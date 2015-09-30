NG-BASE
===========

es una base estructurada de AngularJS, con herramientas avanzadas de validación de formularios, rutas, servicios de lenguaje 
y carga de datos Json para una fácil conexión con el backend.

## Uso

La configuración inicia desde 'app.js' 

    $rootScope.defaultData = {

        lang : 'en',

        api  : 'json',

        slug : '/'

    };

Se puede configurar el lenguaje que se usara por defecto 'en,es', el link de la API a la cual se conectara y el url base de host si es necesario.

En la carpeta de servicios se encuentra 'lang.js' donde esta el objeto para todos los mensajes de las directivas e información de las vistas.

En route provider configuras las ruta con su vista y controlador..

	App.config(function($routeProvider) {

	  $routeProvider

	      .when('/login', {

	          templateUrl: 'app/views/login.html',

	          controller: 'loginCtrl'

	      }).....

En la vista de "register.html" se encuentra la estructura de la directiva para todo tipo de campos de formulario con validación dinámica.

	<field></field> para input tipo text, number, email, select y textarea

	<password></password> para el campo de password, usando el parametro match='modelo a comparar' valida que la clave coincida con la confirmación

	<field type="select" options='array'></field> para armar el campo select predeterminas un arreglo de objetos con 'text :' y 'value :' esta estructura se puedes observar en el servicio de 'lang.js' en registerConfig, en el campo 'level:' 

	<raios><radios> al igual que en los 'select' en el parámetro options='' se le predetermina el array con las opciones para los radio buttons.

### Herramientas

la base incluye una serie de servicios útiles para lectura y envíos de json, ademas de controladores para login y registro de usuario pre-configurados.

### Creditos

_____________

Ronal Coello  @roncreative

Servicio de lenguaje, estructura de vistas, programación directavia de password, servicios de lecturas y envíos json, controladores, fixes actualización de librerías de angularJS, integración de bootstrap, mejora de mensajes de error con soporte de lenguajes. 
_____________

Duilio Palacios

Estructura principal, configuración 'app.js', programación del servicio 'field-builder.js', directivas 'field, radios'
_____________