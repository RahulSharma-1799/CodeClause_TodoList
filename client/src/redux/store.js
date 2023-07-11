import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {todosReducers} from './reducers/todosReducer';
import { tabReducers } from "./reducers/tabReducer";
const reducer = combineReducers({
  todos: todosReducers,
  currentTab:tabReducers
});
const middleware = [thunk]; 
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;