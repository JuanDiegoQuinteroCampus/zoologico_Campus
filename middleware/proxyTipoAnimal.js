import 'reflect-metadata';
import express from "express";
import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { validationResult } from 'express-validator';
/* import { DTO } from "../helpers/token.js"; */
import { Router } from "express";
import { TipoAnimales } from '../dtocontroller/tipo_animales.js';
import { parametro } from '../validator/params.js';

const middlewareVerify = Router();
/* const DTOData = Router(); */
const proxyTipoAnimal = express();
const middlewareParamTipAni = Router();

proxyTipoAnimal.use(async (req, res, next) => {
  try {
    const data = plainToClass(TipoAnimales, req.body, { excludeExtraneousValues: true });
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

middlewareVerify.use(async (req, res, next) => {
  if (!req.rateLimit) return;
  const { authorization } = req.headers;
  if (!authorization) {
      return res.status(400).send({ status: 400, message: "Falta Token de Autorización" });
  }
  try {
      const encoder = new TextEncoder();
      const jwtData = await jwtVerify(
          authorization,
          encoder.encode(process.env.JWT_PRIVATE_KEY)
      );
      if (!jwtData || !jwtData.payload || !jwtData.payload.id) {
          return res.status(401).send({ status: 401, message: "Token no válido" });
      }
      next();
  } catch (error) {
      res.status(500).send({ status: 500, message: "Error en la verificación del token" });
  }
});

/* DTOData.use(async (req, res, next) => {
  try {
    let data = plainToClass(DTO("tipoAnimales").class, req.body);
    await validate(data);
    req.body = JSON.parse(JSON.stringify(data));
    req.data = undefined;
    next();
  } catch (err) {
    res.status(err.status).send(err)
  }
}); */

middlewareParamTipAni.use(parametro, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
});

export {
  middlewareVerify,
/*   DTOData, */
  proxyTipoAnimal,
  middlewareParamTipAni
};