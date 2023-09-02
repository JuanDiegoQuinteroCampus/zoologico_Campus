import express  from "express";
import dotenv from "dotenv";
// import appAnimales from './api/v1/animales.js';
import appAreas from './api/v1/areas.js';
import appEmpleados from "./api/v1/empleados.js";
import appHabitats from "./api/v1/habitats.js";
import appIncidentes from "./api/v1/incidentes.js";
import appMantenimiento from "./api/v1/mantenimiento.js";
import appTipoAnimales from "./api/v1/tipo_animales.js";
import appVisitantes from "./api/v1/visitantes.js";
import appBodegas from "./api/v1/bodegas.js";
import { appToken, appVerify } from "./helpers/token.js";
dotenv.config();

const app = express();
let config = JSON.parse(process.env.MY_CONFIG);


app.use(express.json());
app.use("/token", appToken)
// app.use("/animales", appVerify, appAnimales);
app.use("/areas", appVerify, appAreas);
app.use("/bodegas", appVerify, appBodegas);
app.use("/empleados", appVerify, appEmpleados);
app.use("/habitats", appVerify, appHabitats);
app.use("/incidentes", appVerify, appIncidentes);
app.use("/mantenimientos", appVerify, appMantenimiento);
app.use("/tipoAnimales", appVerify, appTipoAnimales);
app.use("/visitantes", appVerify, appVisitantes);

app.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
})