import express from "express";
import { ObjectId } from "mongodb";
import { con } from "../../db/atlas.js";

export async function getAllBodegas(req, res) {
    try {
        let db = await con();
        let collection = db.collection("bodegas");
        let result = await collection.find({}).sort({ _id: 1 }).toArray();
        if (!result || result.length === 0) {
            res.status(404).json({
                status: 404,
                message: "Not Found"
            });
        } else {
            res.send(result);
        }
    } catch (error) {
        console.log(error.errInfo);
    }
};

export async function getBodegaById(req, res, bodegaId) {
    let id = parseInt(bodegaId);
    let db = await con();
    let collection = db.collection("bodegas");
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

export async function postBodegas(req, res) {
    try {
        const db = await con();
        const collection = db.collection('bodegas');
        await collection.insertOne({ ...req.body });
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
};

export async function putBodegas(req, res, bodegaId) {
    try {
        let _id = parseInt(bodegaId);
        const db = await con();
        const collection = db.collection('bodegas');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData })
        result.matchedCount === 1 ?
            res.send({ message: "Bodega Exitosamente Actualizada :)" }) :
            res.send({ message: "No se encontró Data" });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            satus: 500,
            message: `Internal Server Error :(`,
            error: e.message
        });
    }
};

export async function deleteBodegas(req, res, bodegaId) {
    try {
        let id = parseInt(bodegaId);
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
};