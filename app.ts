import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from "helmet";
import cors from "cors";

import { PORT } from './const';
import { CreateUser, GetUserInfo } from './controller';
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

app.use(rts)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});