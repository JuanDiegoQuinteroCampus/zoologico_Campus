import express from "express";
import * as mantenimiento from '../api/v1/mantenimiento.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyMantenimientos, middlewareVerify } from "../middleware/proxyMantenimientos.js";
import { LimitQuery } from "../../helpers/config.js";

const appMantenimiento = express();
appMantenimiento.use(express.json());
appMantenimiento.use(LimitQuery());
const version = routesVersioning();
