import { Request, Response } from "express";
import { CreateToken } from './security';

export const CreateUser = (req: Request, res: Response) => {

    CreateToken(req.body.nombre).then(token=>{
        return res.status(200).json({
            token: token
        })
    })

}

export const GetUserInfo = (req: Request, res: Response)=>{
    return res.status(200).json({
        exito: true
    })
}
