import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../db/atlas.js";


export async function getIdTipoAni(req, res, tipoanimalId) {
    try {
        let db = await con();
    

    let collection = db.collection("tipo_animales");
    const id = parseInt(tipoanimalId)
    let result = await collection.find({_id: id},{projection: { nombre: 1, especie: 1, comportamiento: 1 }}).toArray();
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
export async function getPeligroAnimal(req, res) {
    try {
        let db = await con();
    

    let collection = db.collection("tipo_animales");
   
    let result = await collection.find({ conservacion: /.*peligro.*/i },{projection: { nombre: 1, especie: 1, conservacion: 1 }}).toArray();
    if (!result || result.length === 0) {
        res.status(404).json({
            status: 404,
            message: "Not Found"
        });
    } else {
        res.send(result);
    }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
}