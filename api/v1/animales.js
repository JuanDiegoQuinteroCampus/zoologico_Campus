import express from "express";
import { ObjectId } from "mongodb";
import { con } from "../../db/atlas.js";
// import { proxyAnimales, middlewareVerify, DTOData } from "../../middleware/proxyAnimales.js";
// import { LimitQuery } from "../../helpers/config.js";

/* const appAnimales = express();
appAnimales.use(express.json());
appAnimales.use(LimitQuery());
 */
/* appAnimales.get("/", middlewareVerify, async ) */
export async function getAllAnimals(req, res) {
    let db = await con();
    let collection = db.collection("animales");
    let result = await collection.find({}).toArray();
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

export async function getAnimalById( req, res) {
    const id = parseInt(req.query.id);
    let db = await con();
    let collection = db.collection("animales");
    let result = await collection.findOne({ _id: id }).toArray();
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
}

/* appAnimales.post("/post", middlewareVerify, proxyAnimales, DTOData, async (req, res) => {
   
}); */

export async function postAnimal(req, res) {
    try {
        const db = await con();
        const collection = db.collection('animales');
        await collection.insertOne({ ...req.body });
        res.status(201).json({
            satus: 201,
            message: "Data del Animal Insertada Exitosamente :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error :(",
            error: e.message
        });
    }
};


/* appAnimales.put("/update/:id", middlewareVerify, proxyAnimales, DTOData, async (req, res) => {

}); */
export async function putAnimal(req, res) {
    try {
        let _id = parseInt(req.params.id);
        const db = await con();
        const collection = db.collection('animales');
        const updateData = req.body;
        let result = await collection.updateOne({ _id: _id }, { $set: updateData })
        result.matchedCount === 1 ?
            res.send({ message: "Data del Animal Exitosamente Actualizada :)" }) :
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


/* appAnimales.delete("/delete/:id", middlewareVerify, async (req, res) => {
   
}); */
export async function deleteAnimal(req, res) {
    try {
        let id = parseInt(req.params.id);
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
}

