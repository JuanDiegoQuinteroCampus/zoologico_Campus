import dotenv from 'dotenv';
import { con } from '../db/atlas.js';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

dotenv.config();


const appToken = Router();
const appVerify = Router();

export const ValidateToken = async (req , token) => {
    try {
        const db = await con();
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        let res = await db.collection("usuarios").findOne({
            "_id": parseInt(jwtData.payload.id)
        });
        
        req.data = res._id;
        return res; 
    } catch (error) {
        throw error;
    }
}

appToken.get("/", async (req, res) => {
    try {
        const { username, password, id_rol } = req.body;
        const conexionDB = await con();
        const user = await conexionDB.collection('usuarios').findOne({ username: username });

        if (!user || user.password !== password) {
            return res.status(401).json({ status: 401, message: 'Credenciales inválidas' });
        }
        const id = user._id.toString();
        const encoder = new TextEncoder();
        const jwtConstructor = await new SignJWT({ id: id, username, password, id_rol: id_rol })
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        return res.status(200).json({ status: 200, jwt: jwtConstructor });
    } catch (error) {
        console.error('Error al generar el token:', error);
        res.status(500).json({ status: 500, message: 'Error interno del servidor' });
      }
});

appVerify.use("/", async (req, res, next) => {
    try {
        const conexionDB = await con();
        const user = await conexionDB.collection('usuarios').findOne({ "_id": parseInt(req.data) });
        const id_rol = user.id_rol

        if (id_rol === 1) {
            next();
        } else if (id_rol === 2 && req.originalUrl.includes('/v2')) {
            next();
        } else {
            return res.status(403).send({ status: 403, message: "No tienes permiso para acceder a esta versión" });
        }
        
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token Expirado" });
        console.log(error)
    }
});

export { appToken, appVerify, passport };
