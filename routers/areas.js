import express from "express";
import * as areas from '../api/v1/areas.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyAreas, middlewareVerify } from "../middleware/proxyAreas.js";
import { LimitQuery } from "../../helpers/config.js";

const appAnimales = express();
appAnimales.use(express.json());
appAnimales.use(LimitQuery());
const version = routesVersioning();