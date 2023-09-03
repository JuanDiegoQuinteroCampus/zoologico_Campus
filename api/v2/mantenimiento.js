import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../../db/atlas.js";


export async function  getDataEmpleado(req, res, manteEmpleadoId) {
    try {
        let db = await con();
    const id = parseInt(manteEmpleadoId)
    let collection = db.collection("mantenimiento");
    let result = await collection.aggregate([
        {
            $match: { _id: id }
        },
        {
          $lookup: {
            from: "empleados",
            localField: "_id",
            foreignField: "_id",
            as: "mantenimeinto_FK",
          },
        },
         {
          $project: {
            "mantenimeinto_FK._id": 0,
            "mantenimeinto_FK.id_area": 0,
           
      
          },
        },
        {
          $unwind: "$mantenimeinto_FK",
        },
         
      ]).toArray();
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