import express from "express";
import { ObjectId } from "mongodb";
import { con } from "../../db/atlas.js";

export async function getAllHabitats(req, res) {
    let db = await con();
    let collection = db.collection("habitats");
    let result = await collection.find({}).sort({ _id: 1 }).toArray();
    if (!result || result.length === 0) {
        res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    } else {
        res.send(result);
    }
};

export async function getHabitatById(req, res, habitatId) {
    let id = parseInt(habitatId);
    let db = await con();
    let collection = db.collection("habitats");
    let result = await collection.find({ _id: id }).toArray();
    try {
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
};

export async function postHabitats(req, res) {
    try {
        const db = await con();
        const collection = db.collection('habitats');
        await collection.insertOne({ ...req.body });
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
};

export async function putHabitats(req, res, habitatId) {
    try {
        let _id = parseInt(habitatId);
        const db = await con();
        const collection = db.collection('habitats');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData })
        result.matchedCount === 1 ?
            res.status(201).json({ status: 201, message: "Habitat Exitosamente Actualizado :)" }) :
            res.status(404).json({ status: 404, message: "No se encontró Data" });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            satus: 500,
            message: `Internal Server Error :(`,
            error: e.message
        });
    }
};

export async function deleteHabitats(req, res, habitatId) {
    try {
        let id = parseInt(habitatId);
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
};
