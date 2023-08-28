import express  from "express";
import dotenv from "dotenv";
import appAnimales from './routers/animales.js'
dotenv.config();

const app = express();
let config = JSON.parse(process.env.MY_CONFIG);

app.use(express.json());
app.use("/animales", appAnimales);

app.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
})