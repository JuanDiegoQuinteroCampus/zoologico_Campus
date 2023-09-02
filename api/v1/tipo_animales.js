import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../../db/atlas.js";
import { DTOData, proxyTipoAnimal, middlewareVerify } from "../../middleware/proxyTipoAnimal.js";
import { LimitQuery } from "../../helpers/config.js";

/* const appTipoAnimales = express();
appTipoAnimales.use(express.json());
appTipoAnimales.use(LimitQuery()); */

/* appTipoAnimales.get("/", middlewareVerify, async (req, res) => {
    
}); */
export async function getAllTipoAnimal(req, res) {
    let db = await con();
    let collection = db.collection("tipo_animales");
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

/* appTipoAnimales.post("/post", middlewareVerify, proxyTipoAnimal, DTOData, async (req, res) => {
    
}); */
export async function postTipoAnimal(req, res) {
    try {
        const db = await con();
        const collection = db.collection('tipo_animales');
        await collection.insertOne({...req.body});
        res.status(201).json({
            satus: 201,
            message: "Tipo de Animal Exitosamente Insertado :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
}

/* appTipoAnimales.put("/update/:id", middlewareVerify, proxyTipoAnimal, DTOData, async (req, res) => {
    
}); */
export async function putTipoAnimal(req, res) {
    try {
        let _id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('tipo_animales');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData }) 
        result.matchedCount === 1 ? 
            res.send({ message: "Tipo de Animal Exitosamente Actualizado :)" }):
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

/* appTipoAnimales.delete("/delete/:id", middlewareVerify, async (req, res) => {
    
}); */
export async function deleteTipoAnimal(req, res) {
    try {
        let id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('tipo_animales');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Tipo Animal Eliminado Exitosamente :)"
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
export default appTipoAnimales;