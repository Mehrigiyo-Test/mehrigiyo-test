import { combineReducers } from "redux";
import { getDoctors } from "./getDoctors/reducer";
import { getNews } from "./getNews/reducer";
import { getProducts } from "./getProducts/reducer";
import { getProductsTypes } from "./getProductsTypes/reducer";
import { getDoctorType } from "./getDoctorType/reducer";
import { changeRouter } from "./changeRouter/reducer";
import { sortDoctorsType } from "./sortDoctorsType/reducer";
import { getFavoriteDoctors } from "./getFavoriteDoctors/reducer";
import { postFavoriteDoctorsId } from "./postFavoriteDoctorId/reducer";
import { deleteFavoriteDoctorsId } from "./deleteFavoriteDoctorId/reducer";
const rootReducer = combineReducers({
  getDoctors,
  getNews,
  getProducts,
  getProductsTypes,
  getDoctorType,
  changeRouter,
  sortDoctorsType,
  getFavoriteDoctors,
  postFavoriteDoctorsId,
  deleteFavoriteDoctorsId,
});

export default rootReducer;
