import express from "express";
import * as bodegas from '../api/v1/bodegas.js';
import { DTOData, proxyBodegas, middlewareVerify } from "../middleware/proxyBodegas.js";
import { LimitQuery } from "../../helpers/config.js";
import routesVersioning from 'express-routes-versioning';

const appBodegas = express();
appBodegas.use(express.json());
appBodegas.use(LimitQuery());
const version = routesVersioning();
