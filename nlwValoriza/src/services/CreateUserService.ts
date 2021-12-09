import { getCustomRepository } from "typeorm"
import { UsersRepositories} from "../repositories/UsersRepositories"
import { hash } from "bcryptjs" //hash metodo responsável por pegar nossa senha e criptografar


interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute( {name, email, admin, password} : IUserRequest){
        //const usersRepository = new UsersRepositories();
        const usersRepository = getCustomRepository(UsersRepositories); 
        
        // Se o e-mail estiver vazio ou incorreto vai dar erro
        if (!email){
            throw new Error("Email  incorrect");
        }

        //Aqui vai validar o e-mail passado
        const userAlreadyExists = await usersRepository.findOne({
            email // email, => não entendi porque tem essa virgula :S
        });  

        //Se o email já estiver cadastrado vai dar mensagem que já existe
        if (userAlreadyExists){
            throw new Error("User alread exists");
        }

        const passwordHash = await hash(password, 8)

        //Caso o email passado ainda não exista ele irá criar um objeto e ...
        const user = usersRepository.create ({
            name,
            email,
            admin,
            password: passwordHash,
        })

        // irá gravar o novo usuáirio
        await usersRepository.save(user)

        return user;
    }
}

export { CreateUserService }