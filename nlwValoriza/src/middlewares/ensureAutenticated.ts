import { Request, Response, NextFunction} from "express";
import { verify} from "jsonwebtoken";

interface IPload {
    sub: string;
}

export function ensureAutenticated (request: Request, response: Response, next: NextFunction){

    //Receber o tokem;
    const authToken = request.headers.authorization
    //console.log (token);  


    // Validar tokem está preenchido;
    if(!authToken){
        return response.status(401).end(); 
    }

    const [, token] = authToken.split(" ")
    //console.log(token);


    try {
        // Validar se é valido;
    const { sub } = verify(token, "1213133dgsg21s3g121a3d21") as IPload;

    // Recuperar info do usuário
    request.user_id = sub;


    return next();
    }catch(err){
        return response.status(401).end();
    }
    






}