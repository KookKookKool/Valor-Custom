// rootReducer.js
import { combineReducers } from "redux";
import whiteFrontReducer from "../Actions/whiteFrontReducer";
import whiteBackReducer from "../Actions/whiteBackReducer";

const rootReducer = combineReducers({
  whiteFront: whiteFrontReducer,
  whiteBack: whiteBackReducer,
});

export default rootReducer;

