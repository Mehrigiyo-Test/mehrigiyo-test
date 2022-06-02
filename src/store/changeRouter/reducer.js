import { CHANGE_ROUTER } from "../types";

const initialState = {
    changeRouterData: 'user',
  };
  
  export const changeRouter = (state = initialState, { type, payload }) => {
    switch (type) {
      case CHANGE_ROUTER:
        return { ...state, changeRouterData: payload };
      default:
        return state;
    }
  };
  