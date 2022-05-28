import { PRODUCT_TYPES } from "../types";

export const actionGetProductsTypes = (data) => (dispatch) => {
  dispatch({
    type: PRODUCT_TYPES,
    payload: data,
  });
};
