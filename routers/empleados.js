import express from "express";
import * as empleados from '../api/v1/empleados.js';
import routesVersioning from 'express-routes-versioning';
import { DTOData, proxyEmpeados, middlewareVerify } from "../middleware/proxyEmpeados.js";
import { LimitQuery } from "../../helpers/config.js";

const appEmpleados = express();
appEmpleados.use(express.json());
appEmpleados.use(LimitQuery());
const version = routesVersioning();
