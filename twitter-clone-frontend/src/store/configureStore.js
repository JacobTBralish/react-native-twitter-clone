import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import TweetReducer from "./reducers/tweets";
import UserReducer from "./reducers/user";

const rootReducer = combineReducers({
  tweets: TweetReducer,
  user: UserReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(reduxPromiseMiddleware()));
};

export default configureStore;
