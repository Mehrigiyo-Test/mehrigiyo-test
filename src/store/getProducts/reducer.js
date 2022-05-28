import { PRODUCT } from "../types";


const initialState = {
    data: [],
};
  
  export const getProducts = (state = initialState, { type, payload }) => {
    switch (type) {
      case PRODUCT:
        return { ...state, data: payload };
      default:
        return state;
    }
  };
  