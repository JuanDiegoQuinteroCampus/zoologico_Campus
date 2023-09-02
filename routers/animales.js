import express from "express";
import * as animals from '../api/v1/animales';
import { proxyAnimales, middlewareVerify, DTOData } from "../../middleware/proxyAnimales.js";
import routesVersioning from 'express-routes-versioning';

const appAnimales = express();
appAnimales.use(express.json());
appAnimales.use(LimitQuery());
const version = routesVersioning();

appAnimales.get('/:id?' , middlewareVerify, DTOData,version({
    "1.0.0": animals.getAllAnimals,
    "1.0.1": getAnimalById 
}));

appAnimales.post('/' , middlewareVerify,proxyAnimales ,DTOData,version({
    "1.0.0": animals.postAnimal,
}));
appAnimales.put('/update/:id?', middlewareVerify,proxyAnimales ,DTOData, version({
    "1.0.0": animals.putAnimal
}));
appAnimales.delete('/delete/:id?', appMiddlewareParamArea, version({
    "1.0.0": animals.deleteAnimal
}));

export default appAnimales;
