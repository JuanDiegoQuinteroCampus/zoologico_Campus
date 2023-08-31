import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../../db/atlas.js";
import { DTOData, proxyBodegas, middlewareVerify } from "../../middleware/proxyBodegas.js";
import { LimitQuery } from "../../helpers/config.js";

const appBodegas = express();
appBodegas.use(express.json());
appBodegas.use(LimitQuery());

appBodegas.get("/", middlewareVerify, async (req, res) => {
    let db = await con();
    let collection = db.collection("bodegas");
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

appBodegas.post("/post", middlewareVerify, proxyBodegas, DTOData, async (req, res) => {
    try {
        const db = await con();
        const collection = db.collection('bodegas');
        await collection.insertOne({...req.body});
        res.status(201).json({
            satus: 201,
            message: "Bodega Insertada Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
});

appBodegas.put("/update/:id", middlewareVerify, proxyBodegas, DTOData, async (req, res) => {
    try {
        let _id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('bodegas');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData }) 
        result.matchedCount === 1 ? 
            res.send({ message: "Bodega Exitosamente Actualizada :)" }):
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

appBodegas.delete("/delete/:id", middlewareVerify, async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('bodegas');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Bodega Eliminada Exitosamente :)"
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
export default appBodegas;