import express from "express";
import { getAllVisitantes, getVisitanteById, postVisitantes, putVisitantes, deleteVisitantes } from "../api/v1/visitantes.js";
import { proxyVisitantes, middlewareVerify, DTOData, middlewareParamVisitantes } from "../middleware/proxyVisitantes.js";
import { LimitQuery } from "../helpers/config.js";

const appVisitantes = express();
appVisitantes.use(express.json());
appVisitantes.use(LimitQuery());
appVisitantes.use((req, res, next) => {
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

appVisitantes.get("/all", middlewareVerify, getAllVisitantes);
appVisitantes.get("/:id", middlewareVerify, middlewareParamVisitantes,(req, res, next) => {
    const visitanteId = req.params.id; 
    getVisitanteById(req, res, visitanteId)
});
appVisitantes.post("/post", middlewareVerify, proxyVisitantes, DTOData, postVisitantes);
appVisitantes.put("/update/:id", middlewareVerify, proxyVisitantes, DTOData, async (req, res) => {
    const visitanteId = req.params.id; 
    putVisitantes(req, res, visitanteId)
});
appVisitantes.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const visitanteId = req.params.id; 
    deleteVisitantes(req, res, visitanteId)
});

export default appVisitantes;