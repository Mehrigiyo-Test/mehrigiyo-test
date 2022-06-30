import { postFavoriteDocId } from "./api";
import {
  FAVORITE_DOC_ERROR,
  FAVORITE_DOC_LOADING,
  FAVORITE_DOC_SUCCESS,
} from "./type";

export const actionFavoriteDocId = (id) => async (dispatch) => {
  await dispatch({ type: FAVORITE_DOC_LOADING });
  try {
    const { data } = await postFavoriteDocId(id);
    await dispatch({ type: FAVORITE_DOC_SUCCESS, payload: data?.data });
  } catch (error) {
    dispatch({ type: FAVORITE_DOC_ERROR, payload: error });
  }
};

