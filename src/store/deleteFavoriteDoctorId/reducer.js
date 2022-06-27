import {
    FAVORITE_DOC_ERROR,
    FAVORITE_DOC_LOADING,
    FAVORITE_DOC_SUCCESS,
  } from "./type";
  
  const initialState = {
    data: [],
    loading: true,
    error: null,
  };
  
  export const deleteFavoriteDoctorsId = (state = initialState, { type, payload }) => {
    switch (type) {
      case FAVORITE_DOC_LOADING:
        return { ...state, loading: true };
      case FAVORITE_DOC_SUCCESS:
        return { ...state, loading: false, data: payload };
      case FAVORITE_DOC_ERROR:
        return { ...state, loading: false, error: payload };
      default:
        return state;
    }
  };
  