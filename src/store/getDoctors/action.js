import { DOCTORS } from "./types";

export const actionDoctors = (data) => (dispatch) => {
  dispatch({
    type: DOCTORS,
    payload: data,
  });
};
