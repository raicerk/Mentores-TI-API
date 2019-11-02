import jwt from 'jsonwebtoken';
import moment from 'moment';
import { SALT } from './const'

export const CreateToken = (user: any) => {
    return new Promise((resolve:any, reject: any) => {
        try {
            resolve(jwt.sign({
                unique_name: user.unique_name,
                nameid: user.nameid,
                nbf: moment().unix(),
                exp: moment().add(1, 'days').unix(),
                iss: false,
                aud: false
            }, SALT));
        } catch (error) {
            reject(error)
        }
        
    })
};