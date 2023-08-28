import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../db/atlas.js";

const appMantenimiento = express();
appMantenimiento.use(express.json());

appMantenimiento.get("/", async (req, res) => {
    let db = await con();
    let collection = db.collection("mantenimiento");
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

appMantenimiento.post("/post", async (req, res) => {
    try {
        const db = await con();
        const collection = db.collection('mantenimiento');
        const insertDocument = {
            ...req.body,
            fecha_mantenimiento: new Date(req.body.fecha_mantenimiento)
        };
        await collection.insertOne(insertDocument);
        res.status(201).json({
            satus: 201,
            message: "Se Insertó la Data Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
});

appMantenimiento.put("/update/:id", async (req, res) => {
    try {
        let _id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('mantenimiento');
        const updateData ={
            $set: {
                ...req.body,
                fecha_mantenimiento: new Date(req.body.fecha_mantenimiento)
            }
        }
        let result = await collection.updateOne({ _id: _id }, updateData) 
        result.matchedCount === 1 ? 
            res.send({ message: "Data Exitosamente Actualizada :)" }):
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

appMantenimiento.delete("/delete/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('mantenimiento');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Deleted Data :)"
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
export default appMantenimiento;