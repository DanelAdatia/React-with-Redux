import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
  total: accountReducer,
});

export default reducers;
