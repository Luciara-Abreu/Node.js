import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { instanceToPlain } from "class-transformer"


class ListUserService{
async execute(){
    //passar para a execuçao o repositorio de onde vamos buscar os user
    const userRepositories = getCustomRepository(UsersRepositories);
    //E daqui vamos pegar todos os usuários
    const users = await userRepositories.find();

    //Aqui retornamos todos os usuários.
    return instanceToPlain(users);

}

}export {ListUserService}