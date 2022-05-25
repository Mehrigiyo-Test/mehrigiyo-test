import { DOCTORS } from "./types";

const initialState = {
  data: [],
};

export const getDoctors = (state = initialState, { type, payload }) => {
  switch (type) {
    case DOCTORS:
      return { ...state, data: payload };
    default:
      return state;
  }
};
