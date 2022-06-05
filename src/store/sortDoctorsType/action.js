import { SORT_DOCTORS } from "../types";

export const actionSortDoctorsType = (data) => (dispatch) => {
    dispatch({
      type: SORT_DOCTORS,
      payload: data,
    });
  };
  