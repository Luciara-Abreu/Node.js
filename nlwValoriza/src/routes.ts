import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController} from "./controllers/CreateComplimentController";
import { ensureAutenticated} from "./middlewares/ensureAutenticated";
import { ListUserSendComplimentsService } from "./services/ListUserSendComplimentsService";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";


const router = Router();
//Aqui vai todas nossas rotas :))

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();


router.post( "/tags" , ensureAutenticated, ensureAdmin ,createTagController.handle);
router.post( "/users", createUserController.handle);
router.post( "/login", authenticateUserController.handle);
router.post( "/compliment", ensureAutenticated, createComplimentController.handle);
router.get ( "/user/Compliments/send", ensureAutenticated ,listUserSendComplimentsController.handle);
router.get ( "/user/Compliments/receive", ensureAutenticated ,listUserReceiveComplimentsController.handle);
router.get ( "/listTags", ensureAutenticated, listTagsController.handle);
router.get ( "/listUser", ensureAutenticated, listUserController.handle);


export { router }