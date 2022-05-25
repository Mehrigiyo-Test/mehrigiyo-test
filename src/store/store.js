import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./rootReducer";

const getMiddleware = () => applyMiddleware(thunk);

export const store = createStore(
  rootReducer,
  composeWithDevTools(getMiddleware())
);
