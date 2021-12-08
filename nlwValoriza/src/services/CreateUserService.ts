
import { UsersRepositories} from "../repositories/UsersRepositories"


interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {

    async execute( {name, email, admin} : IUserRequest){
        const usersRepository = new UsersRepositories();        
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

        //Caso o email passado ainda não exista ele irá criar um objeto e ...
        const user = usersRepository.create ({
            name,
            email,
            admin
        })

        // irá gravar o novo usuáirio
        await usersRepository.save(user)

        return user;
    }
}

export { CreateUserService }