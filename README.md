# Proyecto Zoológico Campus:sparkles:

### ¿Qué es un zoológico?

Un zoológico es un lugar donde se cuidan, rehabilitan y exhiben animales con fines de entretenimiento, educación y conservación. Para gestionar  eficientemente todas las operaciones relacionadas con los animales, su  cuidado, las exhibiciones y la experiencia de los visitantes, se  necesita una infraestructura física y digital interconectada.


<img src="assets/img/zoo.jpg">


### Nuestro enfoque

Al administrar un zoológico, abordamos múltiples aspectos cruciales para un funcionamiento eficiente y una experiencia excepcional. Esto incluye:

1. #### **Datos sobre los Animales**   :bear:

   - Almacena detalles vitales de cada animal.
   - Ayuda a cuidadores y veterinarios a brindar atención precisa.

2. #### **Controlando Hábitats**   :national_park:

   - Ajusta automáticamente las condiciones de los hábitats.
   - Proporciona un ambiente natural y seguro para los animales.

3. #### **Manejo de Visitantes**  :family_man_woman_boy_boy:

   - Facilita la compra y entrada de visitantes.
   - Mejora la experiencia de los visitantes y gestiona la afluencia.

4. #### **Reservas para Eventos y Aprendizaje**  :tickets:

   - Registra inscripciones en clases y eventos.
   - Organiza actividades especiales de manera eficiente.

5. #### **Información para los Visitantes**  :information_desk_person:

   - Ofrece detalles sobre animales y exhibiciones.
   - Enriquece la experiencia de los visitantes.

6. #### **Mantenimiento de la Seguridad**  :lock:

   - Monitorea y asegura la seguridad de todos.
   - Previene incidentes y actúa en emergencias.

7. #### **Operaciones Comerciales**  :moneybag:

   - Gestiona pedidos de alimentos y tiendas.
   - Mejora la eficiencia y la satisfacción de los visitantes.

8. #### **Organización del Personal** :man_factory_worker:

   - Programa turnos y registra horas trabajadas.
   - Optimiza la planificación del personal.



Al observar la relevancia de estos aspectos, hemos optado por  dirigir nuestra atención hacia la identificación, mitigación de riesgos, y la la capacidad de abordar eficazmente cualquier desafío que pueda surgir en las instalaciones y hábitats del zoológico.



## Sistema de Gestión de Mantenimiento y Detección de Problemas :hammer::gear:

El Sistema de Gestión de Mantenimiento y Detección de Problemas para Zoológicos es un sistema diseñado para ayudar a los zoológicos en la planificación, seguimiento y resolución de mantenimientos, así como en la detección temprana y gestión eficiente de problemas en las diferentes áreas del zoológico. 


<img src="assets/img/db.png">


## Características

- **Gestión de Áreas:** Registre y administre información detallada sobre las áreas del zoológico, incluyendo nombres, descripciones, horarios de mantenimiento programado y capacidad de visitantes.

- **Registro de Mantenimientos:** Lleve un registro exhaustivo de los mantenimientos realizados en las áreas del zoológico. Incluya información sobre el área afectada, fecha del mantenimiento, descripción del trabajo y personal responsable.

- **Seguimiento de Incidentes:** Registre y supervise cualquier incidente o problema que ocurra en relación con las áreas del zoológico. Mantenga un historial de fechas, descripciones y acciones tomadas para resolver los incidentes.

  



## Cómo Ayuda al Zoológico

El Sistema de Gestión de Mantenimiento y Detección de Problemas ofrece varias ventajas clave para el zoológico:

- **Eficiencia en el Mantenimiento:** El zoológico puede programar y realizar mantenimientos de manera planificada, evitando interrupciones no planificadas en la operación diaria.
- **Detección Temprana de Problemas:** Los incidentes y problemas pueden ser identificados y abordados en etapas tempranas, minimizando su impacto y reduciendo el riesgo para visitantes, personal y animales.



## Configuración ⚙️

Antes de comenzar, asegúrese de haber configurado su proyecto correctamente.

### :red_circle: Archivo "`tsconfig.json`"

Asegúrese de que su archivo `tsconfig.json` esté configurado con los siguientes valores:

```json
{
  "compilerOptions":{
      "target":"es6",
      "module":"ES6",
      "moduleResolution":"node",
      "outDir":"./dtocontroller",
      "esModuleInterop":true,
      "experimentalDecorators":true,
      "emitDecoratorMetadata": true
  }
}
```



### :red_circle: Archivo "`.env`"

Configure el archivo `.env` en la raíz del proyecto y llénelo con su información necesaria:

```env

Por defecto:
        MY_CONFIG={"hostname":"localhost", "port":7777}
        ATLAS_USER = "JuaVi"
        ATLAS_PASSWORD = "jijiji12345"
        ATLAS_DB ="db_zoologico"
        JWT_PRIVATE_KEY="ubuntuwu"
        
Ejemplo:
        MY_CONFIG={"hostname":"localhost", "port":3000}
        ATLAS_USER="yourUserMongoAtlas"
        ATLAS_PASSWORD="yourPasswordMongoAtlas"
        ATLAS_DB="yourDatabaseMongo"
        JWT_PRIVATE_KEY="yourPrivateKeyforJWT"
        
```



### :red_circle: Dependencias de desarrollo

Asegúrese de tener lo siguiente instalado antes de iniciar el proyecto:

```json
  "devDependencies": {
    "class-transformer": "0.5.1",
    "class-validator": "0.14.0",
    "cookie-parser": "1.4.6",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-query-boolean": "2.0.0",
    "express-rate-limit": "6.8.1",
    "express-routes-versioning": "^1.0.1",
    "express-session": "1.17.3",
    "express-validator": "7.0.1",
    "jose": "4.14.4",
    "mongodb": "5.7.0",
    "nodemon": "3.0.1",
    "reflect-metadata": "0.1.13",
    "typescript": "5.1.6",
    "passport": "0.6.0",
    "passport-http-bearer": "1.0.1"
  }
```

Para esto, puede usar el comando `npm i` desde la terminal.



## Instalación de Dependencias y Operación 🚀

Siga estos pasos para instalar y ejecutar el proyecto:

1. Clone este repositorio en su máquina local. `git clone https://github.com/VickyMontanezCampus/zoologico_Campus.git`

2. Abra una terminal y navegue hasta la carpeta del proyecto. `cd zoologico_Campus` y Se abre VsCode `. code`

3. Inicie el servidor usando el comando `npm run dev`.

4. En otra terminal, sin cerrar la anterior, compile el archivo `tsconfig.json` con `npm run tsc` en otra consola.

5. Acceda a la carpeta `db` en su entorno de MongoDB y ejecute el contenido del archivo `zoo.mongodb` para configurar la base de datos y las colecciones (solo es necesario darle Run).

6. Proceda con el paso [Generar Tokens](#generar-tokens) para poder utilizar los puntos finales.



## Generar Tokens (JWT)🔑

Para utilizar los puntos finales, deberá generar tokens para cada colección. Siga estos pasos:

1. En su navegador web o cliente de API, ingrese la siguiente URL con el nombre de la colección deseada para obtener un token:

   ```
   http://localhost:7777/token/:collection
   ```

   Reemplace `:collection` con uno de los siguientes nombres:

   - animales
   - areas
   - bodegas
   - empleados
   - habitats
   - incidentes
   - mantenimientos
   - tipoAnimales
   - visitantes

2. Copie el token generado.

3. Abra su cliente de API (como Postman) y configure Header:

   ```
   Authorization: Token generado
   ```

4. Si está utilizando Thunder Client:

   1. Debe crear una nueva solicitud.
   2. Vaya a la sección "Headers".
   3. En las cabeceras HTTP, puede ingresar:

   ```
   Autorización: Token generado
   ```

   Asegúrese de reemplazar "Token generado" con el token que copió.



## Versión de la API 🛣️

Para este proyecto, utilizamos versiones de la API para garantizar un mejor rendimiento y funcionalidad.

- Para la versión 1.0 de la API:

    ```javascript
    appIncidentes.use((req, res, next) => {
        const apiVersion = req.headers["x-api"];
        if (apiVersion === "1.0") {
            next();
        } else {
            res.status(400).json({
                status: 400,
                message: "Versión de API No Compatible :("
            });
        }
    });
    ```

- Para la versión 1.1 de la API:

    ```javascript
    appIncidentes.use((req, res, next) => {
        const apiVersion = req.headers["x-api"];
        if (apiVersion === "1.1") {
            next();
        } else {
            res.status(400).json({
                status: 400,
                message: "Versión de API No Compatible :("
            });
        }
    });
    ```

Asegúrese de incluir los encabezados de la versión adecuada en sus solicitudes para garantizar una comunicación correcta con la API.

```
x-api : 1.0 / 1.1
```





#### ¡Recordatorio! 🌟

Antes de realizar cualquier consulta, por favor asegúrate de obtener el token de autenticación correspondiente a la colección que deseas acceder. Los tokens de autenticación son esenciales para garantizar la seguridad y la autorización adecuada en nuestro sistema.

Recuerda seguir estos pasos:

1. Obtener un Token:

   - Visite la siguiente URL en su navegador web o cliente de API: `http://localhost:7777/token/:collection`
   - Reemplace `:collection` con el nombre de la colección deseada de la lista proporcionada (por ejemplo, "animales", "areas", "bodegas", etc.).

2. Copie el token generado.

3. En las cabeceras HTTP, ingreselo:

   ```
   Autorización: Token generado
   ```

Siguiendo estos tres pasos, estará listo para realizar consultas de manera segura y autorizada en nuestra API

Siguiendo estos pasos, garantizamos una experiencia segura y sin problemas al acceder a nuestros recursos! ✨





## Cruds (V1) 🛣️:sparkles:

Para este proyecto, utilizamos verisones de Api para un mejor desempeño dejando en la version 1 (v1) TODOS los Cruds de cada colección.

Para asegurarse que está en la versión correcta **v1** y si está usando TunderClient debe colocar estos headers:

```
x-api : 1.0
```

:point_down:  ¡Recuerda! :point_down:

```
Los siguientes testeos se hicieron con un servidor por defecto, si deseas cambiarlo es tu decisión; para comprobrar los crud, la estructura original es así:

GET
http://hostname:port/collection/all
http://hostname:port/collection/:id

POST
http://hostname:port/collection/post

PUT
http://hostname:port/collection/update/:id

DELETE
http://hostname:port/collection/delete/:id
```



**Crud Animales**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/animales/all

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Simba",
            "id_tipo_animal": 1,
            "dieta": "Carnívora",
            "peso": 200,
            "id_habitat": 1
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/animales/1

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Simba",
            "id_tipo_animal": 1,
            "dieta": "Carnívora",
            "peso": 200,
            "id_habitat": 1
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/animales/post

Body:
    {
        "_id": 4,
        "nombre": "Reina",
        "id_tipo_animal": 1,
        "dieta": "Carnívora",
        "peso": 500,
        "id_habitat": 1
    }

Resultado:
    {
        satus: 201,
        message: "Animal Insertado Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/animales/update/:id

Body:
    {
        "_id": 4,
        "nombre": "Grislly",
        "id_tipo_animal": 4,
        "dieta": "Carnívora",
        "peso": 600,
        "id_habitat": 4
    }

Resultado:
    {
        satus: 201,
        message: "Animal Exitosamente Actualizado :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/animales/delete/:id

Resultado:
    {
        satus: 201,
        message:"Animal Eliminado Exitosamente :)"
     }
```

 

**Crud Areas**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/areas/all

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Hábitats de mamíferos",
            "descripcion": "Área de hábitats para mamíferos",
            "id_encargado": 1
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/areas/1

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Hábitats de mamíferos",
            "descripcion": "Área de hábitats para mamíferos",
            "id_encargado": 1
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/areas/post

Body:
    {
        "_id": 4,
        "nombre": "Hábitats de Bosque",
        "descripcion": "Área de hábitats para mamíferos de en un ecositema boscoso.",
        "id_encargado": 4
    }

Resultado:
    {
        satus: 201,
        message: "Area Insertada Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/areas/update/:id

Body:
    {
        "_id": 4,
        "nombre": "Hábitats de Sequía",
        "descripcion": "Área de hábitats para mamíferos de en un ecositema Arido.",
        "id_encargado": 5
    }

Resultado:
    {
        satus: 201,
        message: "Area Exitosamente Actualizada :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/animales/delete/:id

Resultado:
    {
        satus: 201,
        message:"Area Eliminada Exitosamente :)"
     }
```



**Crud Bodegas**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/bodegas/all

Resultado:
    [
       {
            "_id": 1,
            "nombre": "Bodega de Alimentos",
            "descripcion": "Almacenamiento de alimentos para animales",
            "contenido": "Carne, frutas, vegetales",
            "fecha_revision": "2023-08-10T00:00:00.000Z"
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/bodegas/1

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Bodega de Alimentos",
            "descripcion": "Almacenamiento de alimentos para animales",
            "contenido": "Carne, frutas, vegetales",
            "fecha_revision": "2023-08-10T00:00:00.000Z"
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/bodegas/post

Body:
    {
        "_id": 4,
        "nombre": "Bodega de Suministros",
        "descripcion": "Almacenamiento de Suminitros de herramientas",
        "contenido": "herramientas varias",
        "fecha_revision": "2023-08-10"
    }

Resultado:
    {
        satus: 201,
        message: "Bodega Insertada Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/bodegas/update/:id

Body:
    {
        "_id": 4,
        "nombre": "Bodega de Medicamentos",
        "descripcion": "Almacenamiento de Medicamentos",
        "contenido": "Vitaminas, Calcio",
        "fecha_revision": "2023-08-10"
    }

Resultado:
    {
        satus: 201,
        message: "Bodega Exitosamente Actualizada :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/bodegas/delete/:id

Resultado:
    {
        satus: 201,
        message:"Bodega Eliminada Exitosamente :)"
     }
```



**Crud Empleados**

```
Copy codeGET ALL

Método: GET

URL:
	http://localhost:7777/empleados/all

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Juan Pérez",
            "cedula": 123456789,
            "fecha_nac": "1985-10-15T00:00:00.000Z",
            "id_area": 1,
            "cargo": "Cuidador"
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/empleados/1

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Juan Pérez",
            "cedula": 123456789,
            "fecha_nac": "1985-10-15T00:00:00.000Z",
            "id_area": 1,
            "cargo": "Cuidador"
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/empleados/post

Body:
    {
        "_id": 4,
        "nombre": "María Lopez",
        "cedula": 123456789,
        "fecha_nac": "1985-10-15",
        "id_area": 4,
        "cargo": "Biologo"
    }

Resultado:
    {
        satus: 201,
        message: "Empleado Insertado Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/empleados/update/:id

Body:
    {
        "_id": 4,
        "nombre": "Juan Lopez",
        "cedula": 123456789,
        "fecha_nac": "1985-10-15",
        "id_area": 2,
        "cargo": "Cuidador"
    }

Resultado:
    {
        satus: 201,
        message: "Empleado Exitosamente Actualizado :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/empleados/delete/:id

Resultado:
    {
        satus: 201,
        message:"Empleado Eliminado Exitosamente :)"
     }
```



**Crud Habitats**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/habitats/all

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Hábitat de Leones",
            "id_tipo_animal": 1,
            "capacidad": 5,
            "dimensiones": "30m x 30m"
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/habitats/1

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Hábitat de Leones",
            "id_tipo_animal": 1,
            "capacidad": 5,
            "dimensiones": "30m x 30m"
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/habitats/post

Body:
    {
        "_id": 4,
        "nombre": "Hábitat de Osos",
        "id_tipo_animal": 4,
        "capacidad": 7,
        "dimensiones": "50m x 50m"
    }

Resultado:
    {
        satus: 201,
        message: "Hábitat Insertado Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/habitats/update/:id

Body:
    {
        "_id": 4,
        "nombre": "Hábitat de Ardillas",
        "id_tipo_animal": 5,
        "capacidad": 16,
        "dimensiones": "10m x 30m"
    }

Resultado:
    {
        satus: 201,
        message: "Hábitat Exitosamente Actualizado :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/habitats/delete/:id

Resultado:
    {
        satus: 201,
        message:"Hábitat Eliminado Exitosamente :)"
     }
```



**Crud Incidentes**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/incidentes/all

Resultado:
    [
        {
        "_id": 1,
        "id_area": 2,
        "fecha_incidente": "2023-08-05T00:00:00.000Z",
        "descripcion": "Los comederos de los pavos reales están obstruidos con ramas y tierra"
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/incidentes/1

Resultado:
    [
        {
        "_id": 1,
        "id_area": 2,
        "fecha_incidente": "2023-08-05T00:00:00.000Z",
        "descripcion": "Los comederos de los pavos reales están obstruidos con ramas y tierra"
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/incidentes/post

Body:
    {
        "_id": 4,
        "id_area": 3,
        "fecha_incidente": "2023-08-10T00:00:00.000Z",
        "descripcion": "Incidente de limpieza en el área de reptiles"
    }

Resultado:
    {
        satus: 201,
        message: "Incidente Insertado Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/incidentes/update/:id

Body:
    {
        "_id": 4,
        "id_area": 3,
        "fecha_incidente": "2023-08-12T00:00:00.000Z",
        "descripcion": "Incidente de limpieza en el área de reptiles resuelto"
    }

Resultado:
    {
        satus: 201,
        message: "Incidente Exitosamente Actualizado :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/incidentes/delete/:id

Resultado:
    {
        satus: 201,
        message:"Incidente Eliminado Exitosamente :)"
     }
```



**Crud Mantenimientos**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/mantenimientos/all

Resultado:
    [
        {
            "_id": 1,
            "id_area": 1,
            "fecha_mantenimiento": "2023-09-01T00:00:00.000Z",
            "descripcion": "Se hizo mantenimiento a la valla en el hábitat de los leones",
            "id_responsable": 1
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/mantenimientos/1

Resultado:
    [
        {
            "_id": 1,
            "id_area": 1,
            "fecha_mantenimiento": "2023-09-01T00:00:00.000Z",
            "descripcion": "Se hizo mantenimiento a la valla en el hábitat de los leones",
            "id_responsable": 1
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/mantenimientos/post

Body:
    {
        "_id": 4,
        "id_area": 2,
        "fecha_mantenimiento": "2023-09-05T00:00:00.000Z",
        "descripcion": "Mantenimiento de las estructuras en el área de los tigres",
        "id_responsable": 2
    }

Resultado:
    {
        satus: 201,
        message: "Mantenimiento Insertado Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/mantenimientos/update/:id

Body:
    {
        "_id": 4,
        "id_area": 2,
        "fecha_mantenimiento": "2023-09-08T00:00:00.000Z",
        "descripcion": "Mantenimiento de las estructuras en el área de los tigres completado",
        "id_responsable": 3
    }

Resultado:
    {
        satus: 201,
        message: "Mantenimiento Exitosamente Actualizado :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/mantenimientos/delete/:id

Resultado:
    {
        satus: 201,
        message:"Mantenimiento Eliminado Exitosamente :)"
     }
```



**Crud Tipo de Animales**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/tipoanimales/all

Resultado:
    [
        {
            "_id": 1,
            "nombre": "León",
            "especie": "Panthera leo",
            "descripcion": "El león es un felino majestuoso...",
            "comportamiento": "Los leones viven en manadas...",
            "conservacion": "En peligro"
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/tipoanimales/1

Resultado:
    [
        {
            "_id": 1,
            "nombre": "León",
            "especie": "Panthera leo",
            "descripcion": "El león es un felino majestuoso...",
            "comportamiento": "Los leones viven en manadas...",
            "conservacion": "En peligro"
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/tipoanimales/post

Body:
    {
        "_id": 4,
        "nombre": "Tigre",
        "especie": "Panthera tigris",
        "descripcion": "El tigre es un gran felino...",
        "comportamiento": "Los tigres son solitarios...",
        "conservacion": "En peligro crítico"
    }

Resultado:
    {
        satus: 201,
        message: "Tipo de Animal Insertado Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/tipoanimales/update/:id

Body:
    {
        "_id": 4,
        "nombre": "Jirafa",
        "especie": "Giraffa camelopardalis",
        "descripcion": "La jirafa es un mamífero...",
        "comportamiento": "Las jirafas son herbívoras...",
        "conservacion": "Preocupación menor"
    }

Resultado:
    {
        satus: 201,
        message: "Tipo de Animal Exitosamente Actualizado :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/tipoanimales/delete/:id

Resultado:
    {
        satus: 201,
        message:"Tipo de Animal Eliminado Exitosamente :)"
     }
```



**Crud Visitantes**

```
GET ALL

Método: GET

URL:
	http://localhost:7777/visitantes/all

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Ana Gómez",
            "cedula": 234567890,
            "telefono": "123-456-7890",
            "num_ticket": 123
  		},
      ...
    ]
    
--------------------------------------------------------------    
GET BY ID

Método: GET

URL:
	http://localhost:7777/visitantes/1

Resultado:
    [
        {
            "_id": 1,
            "nombre": "Ana Gómez",
            "cedula": 234567890,
            "telefono": "123-456-7890",
            "num_ticket": 123
  		}
    ]
 
----------------------------------------------------------------
    
POST

Método: POST

URL:
	http://localhost:7777/visitantes/post

Body:
    {
        "_id": 4,
        "nombre": "Carlos Pérez",
        "cedula": 345678901,
        "telefono": "234-567-8901",
        "num_ticket": 124
    }

Resultado:
    {
        satus: 201,
        message: "Visitante Insertado Exitosamente :)"
     }

---------------------------------------------------------------

PUT

Método: PUT

URL:
	http://localhost:7777/visitantes/update/:id

Body:
    {
        "_id": 4,
        "nombre": "María Rodríguez",
        "cedula": 456789012,
        "telefono": "345-678-9012",
        "num_ticket": 125
    }

Resultado:
    {
        satus: 201,
        message: "Visitante Exitosamente Actualizado :)"
     }

---------------------------------------------------------------

DELETE

Método: DELETE

URL:
	http://localhost:7777/visitantes/delete/:id

Resultado:
    {
        satus: 201,
        message:"Visitante Eliminado Exitosamente :)"
     }
```



## Consultas (V2) 🛣️:sparkles:

Para este proyecto, utilizamos verisones de Api para un mejor desempeño dejando en la version 2 (v2) las Consultas Especiales de la Api

Para asegurarse que está en la versión correcta **v2** y si está usando TunderClient debe colocar estos headers:

```
x-api : 1.1
```

:point_down:  ¡Recuerda! :point_down:

```
Los siguientes testeos se hicieron con un servidor por defecto, si deseas cambiarlo es tu decisión; para comprobrar los crud, la estructura original es así:

GET
http://hostname:port/collection/all
http://hostname:port/collection/:id

POST
http://hostname:port/collection/post

PUT
http://hostname:port/collection/update/:id

DELETE
http://hostname:port/collection/delete/:id
```



**Consulta para obtener Áreas de un Empleado**

Esta consulta busca obtener las áreas en las que trabaja un empleado específico.El resultado proporciona información detallada sobre el empleado y las áreas en las que está asignado.

```
GET

Método: GET

URL:
	http://localhost:7777/empleados/v2/area/1
	
Resultado:

    [
      {
        "_id": 1,
        "nombre": "Juan Pérez",
        "cedula": 123456789,
        "fecha_nac": "1985-10-15T00:00:00.000Z",
        "id_area": 1,
        "cargo": "Cuidador"
      }
    ]


```



**Consulta para obtener Datos de un Hábitat por su ID**

Esta consulta busca obtener información detallada sobre un hábitat específico utilizando su `_id`. 

```
GET

Método: GET

URL:
	http://localhost:7777/habitats/v2/capacidad/1
	
Resultado:

    [
      {
        "_id": 1,
        "nombre": "Hábitat de Leones",
        "id_tipo_animal": 1,
        "capacidad": 5
      }
    ]
```



**Consulta para obtener Datos de Mantenimiento de un Empleado**

Esta consulta busca obtener información sobre un registro de mantenimiento y el empleado relacionado con ese mantenimiento. 

```
GET

Método: GET

URL:
	http://localhost:7777/mantenimiento/v2/data/empleado/1
	
Resultado:

[
  {
    "_id": 1,
    "id_area": 1,
    "fecha_mantenimiento": "2023-09-01T00:00:00.000Z",
    "descripcion": "Se hizo mantenimiento a la valla en el habitat de los leones",
    "id_responsable": 1,
    "mantenimeinto_FK": {
      "nombre": "Juan Pérez",
      "cedula": 123456789,
      "fecha_nac": "1985-10-15T00:00:00.000Z",
      "cargo": "Cuidador"
    }
  }
]
```



**Consulta para obtener Datos de un Tipo de Animal por su ID**

Esta consulta busca obtener información detallada sobre un tipo de animal específico utilizando su `_id`. 

```
GET

Método: GET

URL:
	http://localhost:7777/tipoAnimales/v2/comportamiento/1
	
Resultado:

[
  {
    "_id": 1,
    "nombre": "León",
    "especie": "Panthera leo",
    "comportamiento": "Los leones viven en manadas..."
  }
]
```



**Consulta para obtener Tipos de Animales en Peligro**

Esta consulta busca obtener información sobre tipos de animales que se encuentran en peligro de extinción. 

```
GET

Método: GET

URL:
	http://localhost:7777/tipoAnimales/v2/conservacion/peligro
	
Resultado:

[
  {
    "_id": 1,
    "nombre": "León",
    "especie": "Panthera leo",
    "conservacion": "En peligro"
  }
]
```



Estado del proyecto: Incompleto 🎈
El proyecto pasó por algunos pormenores a la hora de aplicar el login y permisos desde la base de datos y luego creando un token de acceso usando passport-http-bearer, hay commits que se demuestra que se intentó desplegar. En un futuro lo Implementaremos :).



#### Autores✨

Vicky Vanessa Montañez Molina

Juan Diego Quintero ArgÜello

https://github.com/JuanDiegoQuinteroCampus

https://github.com/VickyMontanezCampus
