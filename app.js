import express  from "express";
import dotenv from "dotenv";
import appAnimales from "./routers/animales.js";
import appAreas from './routers/areas.js';
import appBodegas from "./routers/bodegas.js";
import appEmpleados from "./routers/empleados.js";
import appHabitats from "./routers/habitats.js";
import appIncidentes from "./routers/incidentes.js";
import appMantenimiento from "./routers/mantenimiento.js";
import appTipoAnimales from "./routers/tipo_animales.js";
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
app.use("/empleados", appVerify, appEmpleados);
app.use("/habitats", appVerify, appHabitats);
app.use("/incidentes", appVerify, appIncidentes);
app.use("/mantenimientos", appVerify, appMantenimiento);
app.use("/tipoAnimales", appVerify, appTipoAnimales);
app.use("/visitantes", appVerify, appVisitantes);

app.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
})