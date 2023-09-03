import express from "express";
import { getAllHabitats, getHabitatById, postHabitats, putHabitats, deleteHabitats } from "../api/v1/habitats.js";
import { getIdHabitats } from '../api/v2/habitat.js';
import { proxyHabitats, middlewareVerify, DTOData, middlewareParamHabitats } from "../middleware/proxyHabitats.js";
import { LimitQuery } from "../helpers/config.js";

const appHabitats = express();
appHabitats.use(express.json());
appHabitats.use(LimitQuery());
appHabitats.use((req, res, next) => {
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

appHabitats.get("/all", middlewareVerify, getAllHabitats);
appHabitats.get("/:id", middlewareVerify, middlewareParamHabitats,(req, res, next) => {
    const habitatId = req.params.id; 
    getHabitatById(req, res, habitatId)
});
appHabitats.post("/post", middlewareVerify, proxyHabitats, DTOData, postHabitats);
appHabitats.put("/update/:id", middlewareVerify, proxyHabitats, DTOData, async (req, res) => {
    const habitatId = req.params.id; 
    putHabitats(req, res, habitatId)
});
appHabitats.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const habitatId = req.params.id; 
    deleteHabitats(req, res, habitatId)
});

const appHabitatV2 = express();
appHabitatV2.use(express.json());
appHabitatV2.use(LimitQuery());
appHabitatV2.use((req, res, next) => {
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

appHabitatV2.get("/capacidad/:id", /* middlewareVerify, middlewareParamHabitats, */ (req, res, next) => {
    const habitatid = req.params.id; 
    getIdHabitats(req, res, habitatid)
});

export {appHabitats, appHabitatV2};
