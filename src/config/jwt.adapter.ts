import jwt, { Secret } from 'jsonwebtoken';
import { envs } from './envs';

const JWT_SEED: Secret = envs.JWT_SEED;

export class JwtAdapter {

    // DI
    static async generateToken(payload: any, duration: string = '2h') {

        return new Promise((resolve) => {
            jwt.sign(payload, JWT_SEED, {expiresIn: duration as any}, (err, token) => {

                if(err) return resolve(null);

                resolve(token)
    
            });
        })


    }

    static validateToken(token: string) {
        
        throw new Error ('Method not implemented.');
        return;
    }

}