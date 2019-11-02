import express = require('express');

import bodyParser from 'body-parser';
import helmet from "helmet";
import cors from "cors";

import { CreateUser } from './controller';

let app: express.Application = express();

app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
});

let rutas = express.Router()

rutas.route('/').get((req, res) => {
    res.status(200).json({
        response: 'Hola Mundo'
    })
})

rutas.route('/CreateUser').post(CreateUser)

app.use(rutas)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});