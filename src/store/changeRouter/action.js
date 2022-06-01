import { CHANGE_ROUTER } from "../types";

export const actionChangeRouter = (data) => (dispatch) => {
    dispatch({
      type: CHANGE_ROUTER,
      payload: data,
    });
  };
  