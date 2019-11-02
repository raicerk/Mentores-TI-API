import { Request, Response } from "express";

export const CreateUser = (req: Request, res: Response) => {

    res.status(200).json({
        nombre: req.body.nombre,
        exito: false
    })

}