import { combineReducers } from "redux";
import { getDoctors } from "./getDoctors/reducer";
import { getNews } from "./getNews/reducer";
import { getProducts } from "./getProducts/reducer";
import { getProductsTypes } from "./getProductsTypes/reducer";
import { getDoctorType } from "./getDoctorType/reducer";
import {changeRouter} from "./changeRouter/reducer"
import {sortDoctorsType} from "./sortDoctorsType/reducer"
const rootReducer = combineReducers({
  getDoctors,
  getNews,
  getProducts,
  getProductsTypes,
  getDoctorType,
  changeRouter,
  sortDoctorsType
});

export default rootReducer;