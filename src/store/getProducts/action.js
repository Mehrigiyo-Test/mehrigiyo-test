import { PRODUCT } from "../types";


export const actionGetProduct = (data) => (dispatch) => {
  dispatch({
    type: PRODUCT,
    payload: data,
  });
};