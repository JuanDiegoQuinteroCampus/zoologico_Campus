import 'reflect-metadata';
import express from "express";
import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { validationResult } from 'express-validator';
/* import { DTO } from "../helpers/token.js"; */
import { Router } from "express";
import { Mantenimientos } from '../dtocontroller/mantenimientos.js';
import { parametro } from '../validator/params.js';

const middlewareVerify = Router();
/* const DTOData = Router(); */
const proxyMantenimientos = express();
const middlewareParamMante = Router();

proxyMantenimientos.use(async (req, res, next) => {
  try {
    const data = plainToClass(Mantenimientos, req.body, { excludeExtraneousValues: true });
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      const errors = validationErrors.map((err) => Object.values(err.constraints));
      res.status(400).json({ message: "Validation error", errors });
    } else {
      req.body = JSON.parse(JSON.stringify(data));
      next();
    }
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

middlewareVerify.use((req, res, next) => {
  if (!req.rateLimit) return;
  let { payload } = req.data;
  const modifiedPayload = {
    ...payload,
    fecha_mantenimiento: new Date(payload.fecha_mantenimiento)
  };
  const isEqual = JSON.stringify(modifiedPayload).replace(/\s+/g, '') === JSON.stringify(payload).replace(/\s+/g, '');
  req.data = undefined;
  if (!isEqual) {
    console.log("No Autorizado");
    res.status(406).send({ status: 406, message: "No Autorizado" });
  } else {
    console.log("Autorizado");
    next();
  }
});


/* DTOData.use(async (req, res, next) => {
  try {
    let data = plainToClass(DTO("mantenimientos").class, req.body);
    await validate(data);
    req.body = JSON.parse(JSON.stringify(data));
    req.data = undefined;
    next();
  } catch (err) {
    res.status(err.status).send(err)
  }
}); */

middlewareParamMante.use(parametro, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
});

export {
  middlewareVerify,
/*   DTOData, */
  proxyMantenimientos,
  middlewareParamMante
};