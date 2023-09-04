import express from "express";
import { getAllTipoAnimal, getTipoAnimalById, postTipoAnimal, putTipoAnimal, deleteTipoAnimal } from "../api/v1/tipo_animales.js";
import { getIdTipoAni, getPeligroAnimal } from '../api/v2/tipo_animales.js'
import { proxyTipoAnimal, middlewareVerify, DTOData, middlewareParamTipAni } from "../middleware/proxyTipoAnimal.js";
import { LimitQuery } from "../helpers/config.js";
import passportHelper from "../helpers/passportHelper.js"
import { appVerify } from "../helpers/token.js";

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
appTipoAnimal.use(passportHelper.authenticate("bearer", {session: false}));
appTipoAnimal.get("/all", middlewareVerify, getAllTipoAnimal);
appTipoAnimal.get("/:id", middlewareVerify, middlewareParamTipAni,(req, res, next) => {
    const tipoAnimalId = req.params.id; 
    getTipoAnimalById(req, res, tipoAnimalId)
});
appTipoAnimal.post("/post", middlewareVerify, proxyTipoAnimal,  postTipoAnimal);
appTipoAnimal.put("/update/:id", middlewareVerify, proxyTipoAnimal,  async (req, res) => {
    const tipoAnimalId = req.params.id; 
    putTipoAnimal(req, res, tipoAnimalId)
});
appTipoAnimal.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const tipoAnimalId = req.params.id; 
    deleteTipoAnimal(req, res, tipoAnimalId)
});


const appTipoAnimalV2 = express();
appTipoAnimalV2.use(express.json());
appTipoAnimalV2.use(LimitQuery());
appTipoAnimalV2.use((req, res, next) => {
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
appTipoAnimalV2.use(passportHelper.authenticate("bearer", {session: false}));
appTipoAnimalV2.get("/comportamiento/:id", appVerify, middlewareParamTipAni,(req, res, next) => {
    const tipoanimalId = req.params.id; 
    getIdTipoAni(req, res, tipoanimalId)
});

appTipoAnimalV2.get("/conservacion/peligro", middlewareVerify, getPeligroAnimal)  ;
export  {appTipoAnimal, appTipoAnimalV2};