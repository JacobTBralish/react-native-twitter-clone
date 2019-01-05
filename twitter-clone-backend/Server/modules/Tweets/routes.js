import { Router } from "express";

import * as TweetsController from "./TweetsController";

const routes = new Router();

routes.post("/tweet", TweetsController.createTweet);
routes.get("/tweet", TweetsController.getAllTweets);

export default routes;
