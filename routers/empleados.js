import express from "express";
import { getAllEmpleado, getEmpleadoById, postEmpleados, putEmpleados, deleteEmpleados } from "../api/v1/empleados.js";
import { proxyEmpeados, middlewareVerify, DTOData, middlewareParamEmpleados } from "../middleware/proxyEmpeados.js";
import { LimitQuery } from "../helpers/config.js";

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

appEmpleados.get("/all", middlewareVerify, getAllEmpleado);
appEmpleados.get("/:id", middlewareVerify, middlewareParamEmpleados,(req, res, next) => {
    const empleadoId = req.params.id; 
    getEmpleadoById(req, res, empleadoId)
});
appEmpleados.post("/post", middlewareVerify, proxyEmpeados, DTOData, postEmpleados);
appEmpleados.put("/update/:id", middlewareVerify, proxyEmpeados, DTOData, async (req, res) => {
    const empleadoId = req.params.id; 
    putEmpleados(req, res, empleadoId)
});
appEmpleados.delete("/delete/:id", middlewareVerify, async (req, res) => {
    const empleadoId = req.params.id; 
    deleteEmpleados(req, res, empleadoId)
});

export default appEmpleados;