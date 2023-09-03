import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../db/atlas.js";


export async function getIdHabitats(req, res, habitatid) {
    try {
        let db = await con();
        let collection = db.collection("habitats");
        const id = parseInt(habitatid)
        let result = await collection.find({_id: id},{projection: { nombre: 1, id_tipo_animal: 1, capacidad: 1 }}).toArray();
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