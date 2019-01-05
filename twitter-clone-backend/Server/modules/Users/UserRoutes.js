import { Router } from "express";

import * as UsersController from "./UsersController";

const routes = new Router();

routes.post("/users", UsersController.createUser);
routes.get("/users", UsersController.getAllUsers);

export default routes;
