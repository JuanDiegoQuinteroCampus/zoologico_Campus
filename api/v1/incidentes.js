import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../../db/atlas.js";
import { DTOData, proxyIncidentes, middlewareVerify } from "../../middleware/proxyIncidentes.js";
import { LimitQuery } from "../../helpers/config.js";

// const appIncidentes = express();
// appIncidentes.use(express.json());
// appIncidentes.use(LimitQuery());

/* appIncidentes.get("/", middlewareVerify, async (req, res) => {
    
}); */
export async function getAllIncidentes(req, res) {
    let db = await con();
    let collection = db.collection("incidentes");
    let result = await collection.find({}).toArray();
    if (!result || result.length === 0) {
        res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    } else {
        res.send(result);
    }
}

/* appIncidentes.post("/post", middlewareVerify, proxyIncidentes, DTOData, async (req, res) => {
    
}); */
export async function postIncidentes(req, res) {
    try {
        const db = await con();
        const collection = db.collection('incidentes');
        const insertDocument = {
            ...req.body,
            fecha_incidente: new Date(req.body.fecha_incidente)
        };
        await collection.insertOne(insertDocument);
        res.status(201).json({
            satus: 201,
            message: "Incidente Registrado Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
}

/* appIncidentes.put("/update/:id", middlewareVerify, proxyIncidentes, DTOData, async (req, res) => {
    
}); */
export async function putIncidentes(req, res) {
    try {
        let _id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('incidentes');
        const updateData ={
            $set: {
                ...req.body,
                fecha_incidente: new Date(req.body.fecha_incidente)
            }
        }
        let result = await collection.updateOne({ _id: _id }, updateData) 
        result.matchedCount === 1 ? 
            res.send({ message: "Incidente Exitosamente Actualizado :)" }):
            res.send({ message: "No se encontró Data" });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            satus: 500,
            message: `Internal Server Error :(`,
            error: e.message
        });
    }
}

/* appIncidentes.delete("/delete/:id", middlewareVerify, async (req, res) => {
    
}); */
export async function deleteIncidentes(req, res) {
    try {
        let id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('incidentes');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Incidente ELiminado Exitosamente :)"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            satus: 500,
            message: `Internal Server Error :(`,
            error: error.message
        });
    }
}
export default appIncidentes;