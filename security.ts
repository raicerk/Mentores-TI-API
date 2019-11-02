import jwt from 'jsonwebtoken';
import moment from 'moment';

export const CreateToken = (user: any) => {
    return new Promise((resolve, reject) => {
        resolve(jwt.sign({
            unique_name: user.unique_name,
            nameid: user.nameid,
            nbf: moment().unix(),
            exp: moment().add(1, 'days').unix(),
            iss: false,
            aud: false
        }, 'misalt'));
    })
};