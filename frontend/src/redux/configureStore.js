import { combineReducers, createStore } from "redux";
import users from "redux/modules/users";

const reducer = combineReducers({
  users
});

let configureStore = initialState => createStore(reducer);

export default configureStore;
