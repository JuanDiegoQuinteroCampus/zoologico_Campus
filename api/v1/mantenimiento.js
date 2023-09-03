import express from "express";
import { ObjectId } from "mongodb";
import { con } from "../../db/atlas.js";

export async function getAllMantenimientos(req, res) {

    let db = await con();
    let collection = db.collection("mantenimiento");
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

export async function getMantenimientoById(req, res, mantenimientoId) {
    let id = parseInt(mantenimientoId);
    let db = await con();
    let collection = db.collection("mantenimiento");
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

export async function postMantenimiento(req, res) {
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
            message: "Mantenimiento Registrado Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
};

export async function putMantenimiento(req, res, mantenimientoId) {
    try {
        let _id = parseInt(mantenimientoId);
        const db = await con();
        const collection = db.collection('mantenimiento');
        const updateData = {
            $set: {
                ...req.body,
                fecha_mantenimiento: new Date(req.body.fecha_mantenimiento)
            }
        }
        let result = await collection.updateOne({ _id: _id }, updateData)
        result.matchedCount === 1 ?
            res.status(201).json({ status: 201, message: "Mantenimiento Exitosamente Actualizado :)" }) :
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

export async function deleteManteniemiento(req, res, mantenimientoId) {
    try {
        let id = parseInt(mantenimientoId);
        const db = await con();
        const collection = db.collection('mantenimiento');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Mantenimiento Eliminado Exitosamente :)"
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