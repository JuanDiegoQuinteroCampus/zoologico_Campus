import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../db/atlas.js";
import { DTOData, proxyVisitantes, middlewareVerify } from "../middleware/proxyVisitantes.js";
import { LimitQuery } from "../helpers/config.js";

const appVisitantes = express();
appVisitantes.use(express.json());
appVisitantes.use(LimitQuery());

appVisitantes.get("/", middlewareVerify, async (req, res) => {
    let db = await con();
    let collection = db.collection('visitantes');
    let result = await collection.find({}).toArray();
    if (!result || result.length === 0) {
        res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    } else {
        res.send(result);
    }
});

appVisitantes.post("/post", middlewareVerify, proxyVisitantes, DTOData, async (req, res) => {
    try {
        const db = await con();
        const collection = db.collection('visitantes');
        await collection.insertOne({...req.body});
        res.status(201).json({
            satus: 201,
            message: "Visitante Registrado Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
});

appVisitantes.put("/update/:id", middlewareVerify, proxyVisitantes, DTOData, async (req, res) => {
    try {
        let _id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('visitantes');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData }) 
        result.matchedCount === 1 ? 
            res.send({ message: "Data del Visitante Exitosamente Actualizada :)" }):
            res.send({ message: "No se encontró Data" });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            satus: 500,
            message: `Internal Server Error :(`,
            error: e.message
        });
    }
});

appVisitantes.delete("/delete/:id", middlewareVerify, async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('visitantes');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Visitante ELiminado Exitosamente :)"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            satus: 500,
            message: `Internal Server Error :(`,
            error: error.message
        });
    }
});
export default appVisitantes;