import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign} from "jsonwebtoken" // sing gera o tokem
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        // verificar se email existe.
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect!")
        }

        //Verificar se senha está correta ou é igual a cadastrada 
        const passwordMatch = await compare(password, user.password)

        // caso a senha for diferente
        if(!passwordMatch){ 
            throw new Error("Email/password incorrect!")
        }

        // gerar token
        const token = sign(
            {
                email: user.email
            },        
                "1213133dgsg21s3g121a3d21",            
            {
                subject: user.id,
                expiresIn:"1d"
            }
        );
        return token;
    }
}

export { AuthenticateUserService}