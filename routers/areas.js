import express from "express";
import * as areas from '../api/v1/areas.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyAreas, middlewareVerify } from "../middleware/proxyAreas.js";
import { LimitQuery } from "../../helpers/config.js";

const appAreas = express();
appAreas.use(express.json());
appAreas.use(LimitQuery());
const version = routesVersioning();

appAreas.get('/:id?' , middlewareVerify, DTOData,version({
    "1.0.0": areas.getAllAreas,
    "1.0.1": areas.getAreaById 
}));

appAreas.post('/' , middlewareVerify,proxyAreas ,DTOData,version({
    "1.0.0": areas.postAreas,
}));
appAreas.put('/update/:id?', middlewareVerify,proxyAreas ,DTOData, version({
    "1.0.0": areas.putAreas
}));
appAreas.delete('/delete/:id?', middlewareVerify, version({
    "1.0.0": areas.deleteAreas
}));