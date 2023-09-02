import express from "express";
import * as incidentes from '../api/v1/incidentes.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyIncidentes, middlewareVerify } from "../middleware/proxyIncidentes.js";
import { LimitQuery } from "../../helpers/config.js";

const appIncidentes = express();
appIncidentes.use(express.json());
appIncidentes.use(LimitQuery());
const version = routesVersioning();
