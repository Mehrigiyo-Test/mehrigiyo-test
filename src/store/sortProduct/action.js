import { SORT_PRODUCT } from "../types";

export const actionSortProduct = (data) => (dispatch) => {
    dispatch({
      type: SORT_PRODUCT,
      payload: data,
    });
  };