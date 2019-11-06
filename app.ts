import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from "helmet";
import cors from "cors";
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import  config  from './ormconfig';
import { PORT } from './const';
import { CreateUser, GetUserInfo, CreatePost } from './controller';
import { RequestValidate } from './middleware';

let app: express.Application = express();

app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'application/json')
    next()
});

let rts = express.Router()

rts.route('/CreateUser').post(CreateUser)
rts.route('/GetUserInfo').post(RequestValidate, GetUserInfo)
rts.route('/CreatePost').post(CreatePost)

app.use(rts)

createConnection(config).then(status => {
    console.log(`conectado correctamente!`)
}).catch(error => {
    console.log(`error en conectar, detalles del error ${error}`)
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});