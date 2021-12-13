import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController} from "./controllers/CreateComplimentController";
import { ensureAutenticated} from "./middlewares/ensureAutenticated";

const router = Router();
//Aqui vai todas nossas rotas :))

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post( "/tags" , ensureAutenticated, ensureAdmin ,createTagController.handle);
router.post( "/users", createUserController.handle);
router.post( "/login", authenticateUserController.handle);
router.post( "/compliment", ensureAutenticated, createComplimentController.handle);


export { router }