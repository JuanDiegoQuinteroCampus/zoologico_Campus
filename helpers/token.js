import 'reflect-metadata';
import dotenv from 'dotenv';
import { plainToClass, classToPlain } from 'class-transformer';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import { Animales } from '../dtocontroller/animales.js';
import { Areas } from '../dtocontroller/areas.js';
import { Bodegas } from '../dtocontroller/bodegas.js';
import { Empleados } from '../dtocontroller/empleados.js';
import { Habitats } from '../dtocontroller/habitats.js';
import { Incidentes } from '../dtocontroller/incidentes.js';
import { Mantenimientos } from '../dtocontroller/mantenimientos.js';
import { TipoAnimales } from '../dtocontroller/tipo_animales.js';
import { Visitantes } from '../dtocontroller/visitantes.js';
dotenv.config();

const appToken = Router();
const appVerify = Router();

const DTO = (cl) =>{
    const match ={
        'animales' : Animales,
        'areas': Areas,
        'bodegas': Bodegas,
        'empleados': Empleados,
        'habitats': Habitats,
        'incidentes': Incidentes,
        'mantenimientos': Mantenimientos,
        'tipoAnimales': TipoAnimales,
        'visitantes': Visitantes
    }
    const instan = match[cl];
    if(!instan) throw { status:404, error: 'Not Found', message:'Token Invalido'}
    return{atributos: plainToClass(instan,{},{ignoreDecorators: true}), class:instan}
}

appToken.use("/:collection", async(req,res)=>{
    try {
        let inst = DTO(req.params.collection).atributos;
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data = jwt;
        res.status(201).send({status: 201, message:"Created", result: jwt});
    } catch (e) {
        res.status(404).send({status: 404, error:"Not Found", message: e.error});
    }
})

appVerify.use("/", async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, token: "Falta Token de Autorización"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "Token Expirado"});
    }
})

export {
    appToken,
    appVerify,
    DTO
};