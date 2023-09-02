import express from "express";
import * as visitantes from '../api/v1/visitantes.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyVisitantes, middlewareVerify } from "../middleware/proxyVisitantes.js";
import { LimitQuery } from "../../helpers/config.js";

const appVisitantes = express();
appVisitantes.use(express.json());
appVisitantes.use(LimitQuery());
const version = routesVersioning();
