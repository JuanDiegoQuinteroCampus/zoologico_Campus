import express from "express";
import { ObjectId } from "mongodb";
import { con } from "../../db/atlas.js";

export async function getAllIncidentes(req, res) {
    let db = await con();
    let collection = db.collection("incidentes");
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

export async function getIncidenteById(req, res, incidenteId) {
    let id = parseInt(incidenteId);
    let db = await con();
    let collection = db.collection("incidentes");
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
};

export async function putIncidentes(req, res, incidenteId) {
    try {
        let _id = parseInt(incidenteId);
        const db = await con();
        const collection = db.collection('incidentes');
        const updateData = {
            $set: {
                ...req.body,
                fecha_incidente: new Date(req.body.fecha_incidente)
            }
        }
        let result = await collection.updateOne({ _id: _id }, updateData)
        result.matchedCount === 1 ?
            res.send({ message: "Incidente Exitosamente Actualizado :)" }) :
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

export async function deleteIncidentes(req, res, incidenteId) {
    try {
        let id = parseInt(incidenteId);
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
};