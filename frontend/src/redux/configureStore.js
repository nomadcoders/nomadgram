import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import Reactotron from "ReactotronConfig";
import thunk from "redux-thunk";
import users from "redux/modules/users";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  users,
  routing: routerReducer
});

let store;

if (env === "development") {
  store = initialState =>
    Reactotron.createStore(reducer, applyMiddleware(...middlewares));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
