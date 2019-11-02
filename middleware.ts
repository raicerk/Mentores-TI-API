import * as jwt from 'jsonwebtoken';
import moment from 'moment';
import { Request, Response, NextFunction } from 'express';

export const RequestValidate = (req: Request, res: Response, next: NextFunction) => {

    try {

        if (!req.headers.authorization) {
            return res.status(403).send({
                description: "Token invalido"
            });
        }

        let payload: any = jwt.verify(req.headers.authorization.replace("Bearer ", ""), 'misalt');

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                description: "El Token ha expirado"
            });
        } else {
            next();
        }
    } catch (err) {

        if (err.name == "TokenExpiredError") {
            return res.status(401).send({
                description: "El Token ha expirado"
            });
        } else {
            return res.status(401).send({
                description: "Token invalido"
            });
        }
    }

}