import express from "express";
import { getAllIncidentes, getIncidenteById, postIncidentes, putIncidentes, deleteIncidentes } from "../api/v1/incidentes.js";
import { proxyIncidentes, middlewareVerify, /* DTOData, */ middlewareParamIncidentes } from "../middleware/proxyIncidentes.js";
import { LimitQuery } from "../helpers/config.js";

const appIncidentes = express();
appIncidentes.use(express.json());
appIncidentes.use(LimitQuery());
appIncidentes.use((req, res, next) => {
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

appIncidentes.get("/all", middlewareVerify, getAllIncidentes);
appIncidentes.get("/:id", middlewareVerify, middlewareParamIncidentes,(req, res, next) => {
    const incidenteId = req.params.id; 
    getIncidenteById(req, res, incidenteId)
});
appIncidentes.post("/post", middlewareVerify, proxyIncidentes, /* DTOData, */ postIncidentes);
appIncidentes.put("/update/:id", middlewareVerify, proxyIncidentes, /* DTOData, */ async (req, res) => {
    const incidenteId = req.params.id; 
    putIncidentes(req, res, incidenteId)
});
appIncidentes.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const incidenteId = req.params.id; 
    deleteIncidentes(req, res, incidenteId)
});

export default appIncidentes;