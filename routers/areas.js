import express from "express";
import { getAllAreas, getAreaById, postAreas, putAreas, deleteAreas } from "../api/v1/areas.js";
import { proxyAreas, middlewareVerify, /* DTOData, */ middlewareParamAreas } from "../middleware/proxyAreas.js";
import { LimitQuery } from "../helpers/config.js";

const appAreas = express();
appAreas.use(express.json());
appAreas.use(LimitQuery());

appAreas.use((req, res, next) => {
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

appAreas.get("/all", middlewareVerify, getAllAreas);
appAreas.get("/:id", middlewareVerify, middlewareParamAreas,(req, res, next) => {
    const areaId = req.params.id; 
    getAreaById(req, res, areaId)
});
appAreas.post("/post", middlewareVerify, proxyAreas, /* DTOData, */ postAreas);
appAreas.put("/update/:id", middlewareVerify, proxyAreas, /* DTOData, */ async (req, res) => {
    const areaId = req.params.id; 
    putAreas(req, res, areaId)
});
appAreas.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const areaId = req.params.id; 
    deleteAreas(req, res, areaId)
});

export default appAreas;