import express from "express";
import { getAllTipoAnimal, getTipoAnimalById, postTipoAnimal, putTipoAnimal, deleteTipoAnimal } from "../api/v1/tipo_animales.js";
import { proxyTipoAnimal, middlewareVerify, DTOData, middlewareParamTipAni } from "../middleware/proxyTipoAnimal.js";
import { LimitQuery } from "../helpers/config.js";

const appTipoAnimal = express();
appTipoAnimal.use(express.json());
appTipoAnimal.use(LimitQuery());
appTipoAnimal.use((req, res, next) => {
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

appTipoAnimal.get("/all", middlewareVerify, getAllTipoAnimal);
appTipoAnimal.get("/:id", middlewareVerify, middlewareParamTipAni,(req, res, next) => {
    const tipoAnimalId = req.params.id; 
    getTipoAnimalById(req, res, tipoAnimalId)
});
appTipoAnimal.post("/post", middlewareVerify, proxyTipoAnimal, DTOData, postTipoAnimal);
appTipoAnimal.put("/update/:id", middlewareVerify, proxyTipoAnimal, DTOData, async (req, res) => {
    const tipoAnimalId = req.params.id; 
    putTipoAnimal(req, res, tipoAnimalId)
});
appTipoAnimal.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const tipoAnimalId = req.params.id; 
    deleteTipoAnimal(req, res, tipoAnimalId)
});

export default appTipoAnimal;