import { Request, Response } from "express";
import { CreateToken } from './security';

import Post from './post.entity'
import { getRepository } from "typeorm";

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

export const CreatePost = async (request: Request, response: Response) => {
    let ObjPost = new Post();
    ObjPost.id = request.body.id;
    ObjPost.title = request.body.title;
    ObjPost.content = request.body.content;
    const userRepository = getRepository(Post);
    await userRepository.save(ObjPost);
    return response.status(201).json({
        estado: 200
    })
}
