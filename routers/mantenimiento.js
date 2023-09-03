import express from "express";
import { getAllMantenimientos, getMantenimientoById, postMantenimiento, putMantenimiento, deleteMantenimiento } from "../api/v1/mantenimiento.js";
import { proxyMantenimientos, middlewareVerify, DTOData, middlewareParamMante } from "../middleware/proxyMantenimientos.js";
import { LimitQuery } from "../helpers/config.js";

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

appMantenimientos.get("/all", middlewareVerify, getAllMantenimientos);
appMantenimientos.get("/:id", middlewareVerify, middlewareParamMante,(req, res, next) => {
    const mantenimientoId = req.params.id; 
    getMantenimientoById(req, res, mantenimientoId)
});
appMantenimientos.post("/post", middlewareVerify, proxyMantenimientos, DTOData, postMantenimiento);
appMantenimientos.put("/update/:id", middlewareVerify, proxyMantenimientos, DTOData, async (req, res) => {
    const mantenimientoId = req.params.id; 
    putMantenimiento(req, res, mantenimientoId)
});
appMantenimientos.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const mantenimientoId = req.params.id; 
    deleteMantenimiento(req, res, mantenimientoId)
});

export default appMantenimientos;