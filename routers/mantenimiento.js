import express from "express";
import { getAllMantenimientos, getMantenimientoById, postMantenimiento, putMantenimiento, deleteMantenimiento } from "../api/v1/mantenimiento.js";
import { getDataEmpleado } from '../api/v2/mantenimiento.js'
import { proxyMantenimientos, middlewareVerify, DTOData, middlewareParamMante } from "../middleware/proxyMantenimientos.js";
import { LimitQuery } from "../helpers/config.js";
import passportHelper from "../helpers/passportHelper.js"
import { appVerify } from "../helpers/token.js";
const appMantenimientos = express();
appMantenimientos.use(express.json());
appMantenimientos.use(LimitQuery());
appMantenimientos.use((req, res, next) => {
    const apiVersion = req.headers["x-api"];
    if (apiVersion === "1.0") {
        next();
    } else {
        res.status(400).json({
            status: 400,
            message: "API Version No Compatible :("
        });
    }
});


appMantenimientos.use(passportHelper.authenticate("bearer", {session: false}));
appMantenimientos.get("/all", middlewareVerify, getAllMantenimientos);
appMantenimientos.get("/:id", middlewareVerify, middlewareParamMante,(req, res, next) => {
    const mantenimientoId = req.params.id; 
    getMantenimientoById(req, res, mantenimientoId)
});
appMantenimientos.post("/post", middlewareVerify, proxyMantenimientos,  postMantenimiento);
appMantenimientos.put("/update/:id", middlewareVerify, proxyMantenimientos,  async (req, res) => {
    const mantenimientoId = req.params.id; 
    putMantenimiento(req, res, mantenimientoId)
});
appMantenimientos.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const mantenimientoId = req.params.id; 
    deleteMantenimiento(req, res, mantenimientoId)
});


const appMantenimientoV2 = express();
appMantenimientoV2.use(express.json())
appMantenimientoV2.use(LimitQuery());
appMantenimientoV2.use((req, res, next) => {
    const apiVersion = req.headers["x-api"];
    if (apiVersion === "1.1") {
        next();
    } else {
        res.status(400).json({
            status: 400,
            message: "API Version No Compatible :("
        });
    }
});
appMantenimientoV2.use(passportHelper.authenticate("bearer", {session: false}));
appMantenimientoV2.get("/data/empleado/:id", appVerify, middlewareParamMante,(req, res, next) => {
    const manteEmpleadoId = req.params.id; 
    getDataEmpleado(req, res, manteEmpleadoId)
});

export  {appMantenimientos, appMantenimientoV2};