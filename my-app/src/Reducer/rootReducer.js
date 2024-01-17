// rootReducer.js
import { combineReducers } from "redux";
import whiteFrontReducer from "../Actions/whiteFrontReducer";
import whiteBackReducer from "../Actions/whiteBackReducer";
import whiteRightReducer from "../Actions/whiteRightReducer";
import whiteLeftReducer from "../Actions/whiteLeftReducer";

const rootReducer = combineReducers({
  whiteFront: whiteFrontReducer,
  whiteBack: whiteBackReducer,
  whiteRight: whiteRightReducer,
  whiteLeft: whiteLeftReducer,
});

export default rootReducer;

