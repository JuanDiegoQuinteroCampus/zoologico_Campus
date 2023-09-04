import express from "express";
import { getAllAnimals, getAnimalById, postAnimal, putAnimal, deleteAnimal } from "../api/v1/animales.js";
import { proxyAnimales, middlewareVerify, DTOData, middlewareParamAnimales } from "../middleware/proxyAnimales.js";
import { LimitQuery } from "../helpers/config.js";

const appAnimales = express();
appAnimales.use(express.json());
appAnimales.use(LimitQuery());
appAnimales.use((req, res, next) => {
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

appAnimales.get("/all", middlewareVerify, getAllAnimals);
appAnimales.get("/:id", middlewareVerify, middlewareParamAnimales,(req, res, next) => {
    const animalId = req.params.id; 
    getAnimalById(req, res, animalId)
});
appAnimales.post("/post", middlewareVerify, proxyAnimales, DTOData, postAnimal);
appAnimales.put("/update/:id", middlewareVerify, proxyAnimales, DTOData, async (req, res) => {
    const animalId = req.params.id; 
    putAnimal(req, res, animalId)
});
appAnimales.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const animalId = req.params.id; 
    deleteAnimal(req, res, animalId)
});

export default appAnimales;