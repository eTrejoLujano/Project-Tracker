import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addProjectReducer,
  projectListsReducer,
} from "./projectReducer/projectReducer";

const reducer = combineReducers({
  projectLists: projectListsReducer,
  addProject: addProjectReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
