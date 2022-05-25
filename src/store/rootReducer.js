import { combineReducers } from "redux";
import { getDoctors } from "./getDoctors/reducer";

const rootReducer = combineReducers({
  getDoctors,
});
export default rootReducer;
