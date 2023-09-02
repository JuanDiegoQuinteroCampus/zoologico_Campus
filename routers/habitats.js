import express from "express";
import * as habitats from '../api/v1/habitats.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyHabitats, middlewareVerify } from "../middleware/proxyHabitats.js";
import { LimitQuery } from "../../helpers/config.js";

const appHabitats = express();
appHabitats.use(express.json());
appHabitats.use(LimitQuery());
const version = routesVersioning();
