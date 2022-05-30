import { GET_DOCTOR_TYPE } from "../types";


const initialState = {
  info: [],
};

export const getDoctorType = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOCTOR_TYPE: 
      return { ...state, info: payload };
    default:
      return state;
  }
};
