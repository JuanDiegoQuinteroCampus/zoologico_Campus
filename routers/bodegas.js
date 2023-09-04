import express from "express";
import { getAllBodegas, getBodegaById, postBodegas, putBodegas, deleteBodegas } from "../api/v1/bodegas.js";
import { proxyBodegas, middlewareVerify, /* DTOData, */ middlewareParamBodegas } from "../middleware/proxyBodegas.js";
import { LimitQuery } from "../helpers/config.js";

const appBodegas = express();
appBodegas.use(express.json());
appBodegas.use(LimitQuery());
appBodegas.use((req, res, next) => {
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

appBodegas.get("/all", middlewareVerify, getAllBodegas);
appBodegas.get("/:id", middlewareVerify, middlewareParamBodegas,(req, res, next) => {
    const bodegaId = req.params.id; 
    getBodegaById(req, res, bodegaId)
});
appBodegas.post("/post", middlewareVerify, proxyBodegas, /* DTOData, */ postBodegas);
appBodegas.put("/update/:id", middlewareVerify, proxyBodegas, /* DTOData, */ async (req, res) => {
    const bodegaId = req.params.id; 
    putBodegas(req, res, bodegaId)
});
appBodegas.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const bodegaId = req.params.id; 
    deleteBodegas(req, res, bodegaId)
});

export default appBodegas;