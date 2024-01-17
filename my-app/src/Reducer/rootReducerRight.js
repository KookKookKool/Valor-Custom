// rootReducerRight.js
import { combineReducers } from "redux";
import whiteRightReducer from "../Actions/whiteRightReducer";

const rootReducerRight = combineReducers({
  whiteRight: whiteRightReducer,
});

export default rootReducerRight;

