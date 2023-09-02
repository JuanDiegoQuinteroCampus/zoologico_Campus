import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../../db/atlas.js";

export async function getAllAnimals(req, res){
    try {
        let db = await con();
        let collection = db.collection("animales");
        let result = await collection.find({}).sort({_id: 1}).toArray();
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

export async function getAnimalById( req, res, animalId) {
    let id = parseInt(animalId);
    let db = await con();
    let collection = db.collection("animales");
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

export async function postAnimal(req, res) {
    try {
        const db = await con();
        const collection = db.collection('animales');
        await collection.insertOne({...req.body});
        res.status(201).json({
            satus: 201,
            message: "Animal Insertado Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
};

export async function putAnimal(req, res, animalId) {
    try {
        let _id = parseInt(animalId);
        const db = await con();
        const collection = db.collection('animales');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData }) 
        result.matchedCount === 1 ? 
            res.status(201).json({ status:201, message: "Animal Exitosamente Actualizado :)" }):
            res.status(404).json({ status:404, message: "No se encontró Data" });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            satus: 500,
            message: `Internal Server Error :(`,
            error: e.message
        });
    }

};

export async function deleteAnimal(req, res, animalId) {
    try {
        let id = parseInt(animalId);
        const db = await con();
        const collection = db.collection('animales');
        await collection.deleteOne({
            _id: id
        });
        res.status(201).json({
            satus: 201,
            message: "Animal Eliminado Exitosamente :)"
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