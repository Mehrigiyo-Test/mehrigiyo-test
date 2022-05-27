import { NEWS } from "./types";

const initialState = {
    data: [],
  };
  
  export const getNews = (state = initialState, { type, payload }) => {
    switch (type) {
      case NEWS:
        return { ...state, data: payload };
      default:
        return state;
    }
  };
  