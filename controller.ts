import { Request, Response } from "express";
import { CreateToken } from './security';

import { Post } from './post.entity'


export const CreateUser = (req: Request, res: Response) => {

    CreateToken(req.body.nombre).then(token => {
        return res.status(200).json({
            token: token
        })
    })
}

export const GetUserInfo = (req: Request, res: Response) => {
    return res.status(200).json({
        exito: true
    })
}

export const CreatePost = (request: Request, response: Response) => {

    Post.create({
        id: request.body.id,
        title: request.body.title,
        content: request.body.content
    }).save().then(res => {
        return response.status(201).json({
            estado: 200,
            response: res
        })
    }).catch(error => {
        return response.status(400).json({
            estado: 400,
            response: error
        })
    })

}
