import express  from "express";
import dotenv from "dotenv";
import appAnimales from "./routers/animales.js";
import appAreas from './routers/areas.js';
import appBodegas from "./routers/bodegas.js";
import {appEmpleados, appEmpleadosV2} from "./routers/empleados.js";
import {appHabitats, appHabitatV2} from "./routers/habitats.js";
import appIncidentes from "./routers/incidentes.js";
import {appMantenimientos, appMantenimientoV2} from "./routers/mantenimiento.js";
import { appTipoAnimal, appTipoAnimalV2 } from "./routers/tipo_animales.js";
import appVisitantes from "./routers/visitantes.js";
import { appToken, appVerify } from "./helpers/token.js";

dotenv.config();

const app = express();
let config = JSON.parse(process.env.MY_CONFIG);


app.use(express.json());
app.use("/token", appToken)
app.use("/animales", appVerify, appAnimales);
app.use("/areas", appVerify, appAreas);
app.use("/bodegas", appVerify, appBodegas);

// *Tener en cuenta el orden de versiones, no puede ir version uno primero
app.use("/empleados/v2", appVerify, appEmpleadosV2);
app.use("/empleados", appVerify, appEmpleados);


app.use("/habitats/v2", appVerify, appHabitatV2);
app.use("/habitats", appVerify, appHabitats);

app.use("/incidentes", appVerify, appIncidentes);

app.use("/mantenimiento/v2", appVerify, appMantenimientoV2);
app.use("/mantenimientos", appVerify, appMantenimientos);

app.use("/tipoAnimales/v2", appVerify, appTipoAnimalV2);
app.use("/tipoAnimales", appVerify, appTipoAnimal);

app.use("/visitantes", appVerify, appVisitantes);


app.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
})