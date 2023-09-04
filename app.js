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
import { appToken, appVerify, passport } from "./helpers/token.js";
import passportHelper from "./helpers/passportHelper.js";

dotenv.config();

const app = express();
let config = JSON.parse(process.env.MY_CONFIG);
app.use(express.json());
app.use(passport.initialize());

app.use("/token", appToken);
app.use("/animales", passport.authenticate('bearer', { session: false}) ,appVerify, appAnimales);
app.use("/areas", passport.authenticate('bearer', { session: false}) ,appVerify, appAreas);
app.use("/bodegas", passport.authenticate('bearer', { session: false}) ,appVerify, appBodegas);

// *Tener en cuenta el orden de versiones, no puede ir version uno primero
app.use("/empleados/v2",appEmpleadosV2);
app.use("/empleados" ,passport.authenticate('bearer', { session: false}) ,appVerify, appEmpleados);


app.use("/habitats/v2", appHabitatV2);
app.use("/habitats", passport.authenticate('bearer', { session: false}) ,appVerify, appHabitats);

app.use("/incidentes", passport.authenticate('bearer', { session: false}) ,appVerify, appIncidentes);

app.use("/mantenimiento/v2",passport.authenticate('bearer', { session: false}) , appVerify, appMantenimientoV2);
app.use("/mantenimientos",passport.authenticate('bearer', { session: false}) , appVerify, appMantenimientos);

app.use("/tipoAnimales/v2", passport.authenticate('bearer', { session: false}) ,appVerify, appTipoAnimalV2);
app.use("/tipoAnimales", passport.authenticate('bearer', { session: false}) ,appVerify, appTipoAnimal);

app.use("/visitantes",passport.authenticate('bearer', { session: false}) , appVerify, appVisitantes);


app.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
})