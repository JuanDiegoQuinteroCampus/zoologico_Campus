import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../../db/atlas.js";

export async function getAllTipoAnimal(req, res) {
    let db = await con();
    let collection = db.collection("tipo_animales");
    let result = await collection.find({}).sort({_id: 1}).toArray();
    if (!result || result.length === 0) {
        res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    } else {
        res.send(result);
    }
};

export async function getTipoAnimalById( req, res, tipoAnimalId) {
    let id = parseInt(tipoAnimalId);
    let db = await con();
    let collection = db.collection("tipo_animales");
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
};

export async function putTipoAnimal(req, res, tipoAnimalId) {
    try {
        let _id = parseInt(tipoAnimalId);
        const db = await con();
        const collection = db.collection('tipo_animales');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData }) 
        result.matchedCount === 1 ? 
            res.status(201).json({ status: 201, message: "Tipo de Animal Exitosamente Actualizado :)" }):
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

export async function deleteTipoAnimal(req, res, tipoAnimalId) {
    try {
        let id = parseInt(tipoAnimalId);
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
};