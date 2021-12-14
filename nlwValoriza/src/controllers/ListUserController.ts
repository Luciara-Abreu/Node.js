import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";


class ListUserController{
// handle => lidar com
async handle(request: Request, response: Response){
    // Vamos pegar a nossa lista de usuários
    const listUserService = new ListUserService();
    
    const users = await listUserService.execute();

    return response.json(users);
}

} export { ListUserController}