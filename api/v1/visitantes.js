import express from "express";
import { ObjectId } from "mongodb";
import { con } from "../../db/atlas.js";

export async function getAllVisitantes(req, res) {
    let db = await con();
    let collection = db.collection('visitantes');
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

export async function getVisitanteById(req, res, visitanteId) {
    let id = parseInt(visitanteId);
    let db = await con();
    let collection = db.collection("visitantes");
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

export async function postVisitantes(req, res) {
    try {
        const db = await con();
        const collection = db.collection('visitantes');
        await collection.insertOne({ ...req.body });
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
};

export async function putVisitantes(req, res, visitanteId) {
    try {
        let _id = parseInt(visitanteId);
        const db = await con();
        const collection = db.collection('visitantes');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData })
        result.matchedCount === 1 ?
            res.status(201).json({ status: 201, message: "Data del Visitante Exitosamente Actualizada :)" }) :
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

export async function deleteVisitantes(req, res, visitanteId) {
    try {
        let id = parseInt(visitanteId);
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
};