// rootReducerLeft.js
import { combineReducers } from "redux";
import whiteLeftReducer from "../Actions/whiteLeftReducer";

const rootReducerLeft = combineReducers({
  whiteLeft: whiteLeftReducer,
});

export default rootReducerLeft;

