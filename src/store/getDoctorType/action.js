import { GET_DOCTOR_TYPE } from "../types";


export const actionDoctorType = (data) => (dispatch) => {
    dispatch({
      type: GET_DOCTOR_TYPE,
      payload: data,
    });
  };
  