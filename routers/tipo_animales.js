import express from "express";
import * as tipoAnimals from '../api/v1/tipo_animales.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyTipoAnimal, middlewareVerify } from "../middleware/proxyTipoAnimal.js";
import { LimitQuery } from "../../helpers/config.js";

const appTipoAnimales = express();
appTipoAnimales.use(express.json());
appTipoAnimales.use(LimitQuery());
const version = routesVersioning();
