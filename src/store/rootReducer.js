import { combineReducers } from "redux";
import { getDoctors } from "./getDoctors/reducer";
import { getNews } from "./getNews/reducer";
import { getProducts } from "./getProducts/reducer";
import { getProductsTypes } from "./getProductsTypes/reducer";

const rootReducer = combineReducers({
  getDoctors,
  getNews,
  getProducts,
  getProductsTypes
});
export default rootReducer;
