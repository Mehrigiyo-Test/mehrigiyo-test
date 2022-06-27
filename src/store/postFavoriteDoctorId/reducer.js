import {
    FAVORITE_DOC_ERROR,
    FAVORITE_DOC_LOADING,
    FAVORITE_DOC_SUCCESS,
  } from "./type";
  
  const initialState = {
    favoriteDocId: [],
    loading: true,
    error: null,
  };
  
  export const postFavoriteDoctorsId = (state = initialState, { type, payload }) => {
    switch (type) {
      case FAVORITE_DOC_LOADING:
        return { ...state, loading: true };
      case FAVORITE_DOC_SUCCESS:
        return { ...state, loading: false, favoriteDocId: payload };
      case FAVORITE_DOC_ERROR:
        return { ...state, loading: false, error: payload };
      default:
        return state;
    }
  };
  