import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import TweetReducer from "./reducers/tweets";

const rootReducer = combineReducers({
  tweets: TweetReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(reduxPromiseMiddleware()));
};

export default configureStore;
