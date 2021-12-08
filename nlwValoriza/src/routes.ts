import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
//Aqui vai todas nossas rotas :))

const createUserController = new CreateUserController();

router.post( "/users", createUserController.handle)


export { router }