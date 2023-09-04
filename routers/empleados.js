import express from "express";
import { getAllEmpleado, getEmpleadoById, postEmpleados, putEmpleados, deleteEmpleados } from "../api/v1/empleados.js";
import { proxyEmpeados, middlewareVerify, DTOData, middlewareParamEmpleados } from "../middleware/proxyEmpeados.js";
import { LimitQuery } from "../helpers/config.js";
import passportHelper from "../helpers/passportHelper.js"
import { appVerify } from "../helpers/token.js";

const appEmpleados = express();
appEmpleados.use(express.json());
appEmpleados.use(LimitQuery());
appEmpleados.use((req, res, next) => {
    const apiVersion = req.headers["x-api"];
    if (apiVersion === "1.0") {
        next();
    } else {
        res.status(400).json({
            status: 400,
            message: "API Version No Compatible :("
        });
    }
});
appEmpleados.use(passportHelper.authenticate("bearer", {session: false}));

appEmpleados.get("/all", getAllEmpleado);
appEmpleados.get("/:id", middlewareParamEmpleados,(req, res, next) => {
    const empleadoId = req.params.id; 
    getEmpleadoById(req, res, empleadoId)
});
appEmpleados.post("/post",  proxyEmpeados, postEmpleados);
appEmpleados.put("/update/:id",  proxyEmpeados, async (req, res) => {
    const empleadoId = req.params.id; 
    putEmpleados(req, res, empleadoId)
});
appEmpleados.delete("/delete/:id",  async (req, res) => {
    const empleadoId = req.params.id; 
    deleteEmpleados(req, res, empleadoId)
});

const appEmpleadosV2 = express();
appEmpleadosV2.use(express.json());
appEmpleadosV2.use(LimitQuery());
appEmpleadosV2.use((req, res, next) => {
    const apiVersion = req.headers["x-api"];
    if (apiVersion === "1.1") {
        next();
    } else {
        res.status(400).json({
            status: 400,
            message: "API Version No Compatible :("
        });
    }
});
appEmpleadosV2.use(passportHelper.authenticate("bearer", {session: false}));
appEmpleadosV2.get("/area/:id" , appVerify, middlewareParamEmpleados,(req, res, next) => {
    const empleareasId = req.params.id; 
    getEmpleadoById(req, res, empleareasId)
});

export {appEmpleados, appEmpleadosV2};