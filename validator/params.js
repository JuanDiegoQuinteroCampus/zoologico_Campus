import { query } from "express-validator";

export const parametro = [
    query("id")
    .optional()
    .matches(/^[0-9]+$/).withMessage("Solo admite números")
    
];