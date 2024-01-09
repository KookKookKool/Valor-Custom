// rootReducerBack.js
import { combineReducers } from "redux";
import whiteBackReducer from "../Actions/whiteBackReducer";

const rootReducerBack = combineReducers({
  whiteBack: whiteBackReducer,
});

export default rootReducerBack;

