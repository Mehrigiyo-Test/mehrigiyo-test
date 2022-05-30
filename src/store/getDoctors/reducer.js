import { DOCTORS } from "./types";

const initialState = {
  dataDoctors: [],
};

export const getDoctors = (state = initialState, { type, payload }) => {
  switch (type) {
    case DOCTORS:
      return { ...state, dataDoctors: payload };
    default:
      return state;
  }
};
