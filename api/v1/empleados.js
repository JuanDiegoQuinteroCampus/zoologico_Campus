import express from "express";
import { ObjectId } from "mongodb";
import { con } from "../../db/atlas.js";

export async function getAllEmpleado(req, res) {
    try {
        let db = await con();
        let collection = db.collection("empleados");
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
        console.log(error);
    }
};

export async function getEmpleadoById(req, res, empleadoId) {
    let id = parseInt(empleadoId);
    let db = await con();
    let collection = db.collection("empleados");
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

export async function postEmpleados(req, res) {
    try {
        const db = await con();
        const collection = db.collection('empleados');
        const insertDocument = {
            ...req.body,
            fecha_nac: new Date(req.body.fecha_nac)
        };
        await collection.insertOne(insertDocument);
        res.status(201).json({
            satus: 201,
            message: "Empleado Insertado Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
};

export async function putEmpleados(req, res, empleadoId) {
    try {
        let _id = parseInt(empleadoId);
        const db = await con();
        const collection = db.collection('empleados');
        const updateData = {
            $set: {
                ...req.body,
                fecha_nac: new Date(req.body.fecha_nac)
            }
        }
        let result = await collection.updateOne({ _id: _id }, updateData)
        result.matchedCount === 1 ?
            res.status(201).json({ status: 201, message: "Data del Empleado Exitosamente Actualizada :)" }) :
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

export async function deleteEmpleados(req, res, empleadoId) {
    try {
        let id = parseInt(empleadoId);
        const db = await con();
        const collection = db.collection('empleados');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Empleado Eliminado Exitosamente :)"
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