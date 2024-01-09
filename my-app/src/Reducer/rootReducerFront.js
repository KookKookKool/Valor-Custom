// rootReducerFront.js
import { combineReducers } from "redux";
import whiteFrontReducer from "../Actions/whiteFrontReducer";

const rootReducerFront = combineReducers({
  whiteFront: whiteFrontReducer,
});

export default rootReducerFront;

