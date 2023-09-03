import express from "express";
import { ObjectId} from "mongodb";
import {con}from "../db/atlas.js";


export async function  getAreaPersonal(req, res, empleareasId) {
    try {
        let db = await con();
    const id = parseInt(empleareasId)
    let collection = db.collection("empleados");
    let result = await collection.aggregate([
        {
            $match: { _id: id }
        },
        {
          $lookup: {
            from: "areas",
            localField: "_id",
            foreignField: "_id",
            as: "areas",
          },
        }
         
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