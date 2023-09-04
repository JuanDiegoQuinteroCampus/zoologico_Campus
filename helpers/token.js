import dotenv from 'dotenv';
import { con } from '../db/atlas.js';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

dotenv.config();


const appToken = Router();
const appVerify = Router();

appToken.post("/", async (req, res) => {
    try {
        const { username, password, id_rol } = req.body;
        const conexionDB = await con();
        const user = await conexionDB.collection('usuarios').findOne({ username: username });

        if (!user || user.password !== password) {
            return res.status(401).json({ status: 401, message: 'Credenciales inválidas' });
        }
        const id = user._id.toString();
        const encoder = new TextEncoder();
        const jwtConstructor = await new SignJWT({ id: id, username, password, id_rol })
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(encoder.encode(process.env.JWT_SECRET));
        return res.status(200).json({ status: 200, jwt: jwtConstructor });
    } catch (error) {
        console.error('Error al generar el token:', error);
        res.status(500).json({ status: 500, message: 'Error interno del servidor' });
      }
});

passport.use(new BearerStrategy(
    async function (token, done) {
        try {
            const encoder = new TextEncoder();
            const jwtData = await jwtVerify(
                token,
                encoder.encode(process.env.JWT_SECRET)
            );
            if (!jwtData || !jwtData.payload || !jwtData.payload.id) {
                return done(null, false);
            }
            const conexionDB = await con();
            const usuario = await conexionDB.collection('usuarios').findOne({ _id: jwtData.payload.id });
            if (!usuario) {
                return done(null, false);
            }
            return done(null, usuario);
        } catch (error) {
            return done(error);
        }
    }
));

appVerify.use("/", async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).send({ status: 400, token: "Falta Token de Autorización" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;

        const { id_rol } = jwtData.payload;

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
