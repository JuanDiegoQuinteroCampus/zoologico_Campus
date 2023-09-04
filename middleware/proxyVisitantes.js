import 'reflect-metadata';
import express from "express";
import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { validationResult } from 'express-validator';
import { DTO } from "../helpers/token.js";
import { Router } from "express";
import { Visitantes } from '../dtocontroller/visitantes.js';
import { parametro } from '../validator/params.js';

const middlewareVerify = Router();
const DTOData = Router();
const proxyVisitantes = express();
const middlewareParamVisitantes = Router();

proxyVisitantes.use(async (req, res, next) => {
  try {
    const data = plainToClass(Visitantes, req.body, { excludeExtraneousValues: true });
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
  if (req.data && req.data.payload) {
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(DTO("visitantes").class, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    if (!Verify) {
      return res.status(406).send({ status: 406, message: "No Autorizado" });
    }
  }
  next();
});

DTOData.use(async (req, res, next) => {
  try {
    let data = plainToClass(DTO("visitantes").class, req.body);
    await validate(data);
    req.body = JSON.parse(JSON.stringify(data));
    req.data = undefined;
    next();
  } catch (err) {
    res.status(err.status).send(err)
  }
});

middlewareParamVisitantes.use(parametro, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
});

export {
  middlewareVerify,
  DTOData,
  proxyVisitantes,
  middlewareParamVisitantes
};