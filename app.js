import express  from "express";
import dotenv from "dotenv";
import appAnimales from './routers/animales.js';
import appAreas from './routers/areas.js';
import appEmpleados from "./routers/empleados.js";
import appHabitats from "./routers/habitats.js";
import appIncidentes from "./routers/incidentes.js";
dotenv.config();

const app = express();
let config = JSON.parse(process.env.MY_CONFIG);

app.use(express.json());
app.use("/animales", appAnimales);
app.use("/areas", appAreas);
app.use("/empleados", appEmpleados);
app.use("/habitats", appHabitats);
app.use("/incidentes", appIncidentes);

app.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
})