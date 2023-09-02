import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../../db/atlas.js";


// const appHabitats = express();
// appHabitats.use(express.json());
// appHabitats.use(LimitQuery());

// appHabitats.get("/", middlewareVerify, async (req, res) => {
    
// });
export async function getAllHabitats(req, res) {
    let db = await con();
    let collection = db.collection("habitats");
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
export async function getIdHabitats(req, res) {
    try {
        let db = await con();
        let collection = db.collection("habitats");
        const id = Math.floor(req.params._id)
        let result = await collection.find({_id: id},{projection: { nombre: 1, id_tipo_animal: 1, capacidad: 1 }}).toArray();
        if (!result || result.length === 0) {
            res.status(404).json({
                status: 404,
                message: "Not Found"
            });
        } else {
            res.send(result);
        }
    } catch (error) {
        console.log(error);
    }
}

// appHabitats.post("/post", middlewareVerify, proxyHabitats, DTOData, async (req, res) => {
    
// });
export async function postHabitats(req, res) {
    try {
        const db = await con();
        const collection = db.collection('habitats');
        await collection.insertOne({...req.body});
        res.status(201).json({
            satus: 201,
            message: "Habitat Insertado Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
}

// appHabitats.put("/update/:id", middlewareVerify, proxyHabitats, DTOData, async (req, res) => {
    
// });
export async function putHabitats(req, res) {
    try {
        let _id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('habitats');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData }) 
        result.matchedCount === 1 ? 
            res.send({ message: "Habitat Exitosamente Actualizado :)" }):
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

// appHabitats.delete("/delete/:id", middlewareVerify, async (req, res) => {
    
// });
export async function deleteHabitats(req, res) {
    try {
        let id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('habitats');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Habitat Eliminado Exitosamente :)"
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
export default appHabitats;