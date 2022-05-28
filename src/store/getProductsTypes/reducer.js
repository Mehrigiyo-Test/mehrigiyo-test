import { PRODUCT_TYPES } from "../types";

const initialState = {
  getType: [],
};

export const getProductsTypes = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_TYPES:
      return { ...state, getType: payload };
    default:
      return state;
  }
};
