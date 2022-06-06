import { SORT_PRODUCT } from "../types";

const initialState = {
    productType: [
      {
        name: "Hammasi",
        checked: false,
      },
      {
        name: "Choy",
        checked: false,
      },
      {
        name: "Asal",
        checked: false,
      },
      {
        name: "Yog’",
        checked: false,
      },
      {
        name: "Non",
        checked: false,
      },
      {
        name: "Ziravorlar",
        checked: false,
      },
      {
        name: "Sharbatlar",
        checked: false,
      },
      {
        name: "Lolipoplar",
        checked: false,
      },
      {
        name: "Tabletkalar",
        checked: false,
      },
    ],
  };
  
  export const sortProductType = (state = initialState, { type, payload }) => {
    switch (type) {
      case SORT_PRODUCT:
        return { ...state, sortProduct: payload };
      default:
        return state;
    }
  };