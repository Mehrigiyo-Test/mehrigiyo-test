import { combineReducers } from "redux";
import { getDoctors } from "./getDoctors/reducer";
import { getNews } from "./getNews/reducer";

const rootReducer = combineReducers({
  getDoctors,
  getNews,
});
export default rootReducer;
