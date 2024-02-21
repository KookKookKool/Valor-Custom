// rootReducerPatch.js
import { combineReducers } from "redux";
import PatchReducer from "../Actions/PatchReducer";

const rootReducerPatch = combineReducers({
  Patch: PatchReducer,
});

export default rootReducerPatch;

