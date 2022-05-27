import { NEWS } from "./types";

export const actionGetNews = (data) => (dispatch) => {
  dispatch({
    type: NEWS,
    payload: data,
  });
};