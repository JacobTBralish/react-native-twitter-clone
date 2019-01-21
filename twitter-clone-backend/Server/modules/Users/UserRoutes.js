import { Router } from "express";

import * as UsersController from "./UsersController";

const routes = new Router();

routes.post("/user", UsersController.createUser);
routes.get("/user", UsersController.getAllUsers);

export default routes;
