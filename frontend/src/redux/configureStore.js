import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import Reactotron from "ReactotronConfig";
import users from "redux/modules/users";
import { i18nState } from "redux-i18n";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  users,
  routing: routerReducer,
  i18nState
});

let store;

if (env === "development") {
  store = initialState =>
    Reactotron.createStore(
      reducer,
      composeEnhancers(applyMiddleware(...middlewares))
    );
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
