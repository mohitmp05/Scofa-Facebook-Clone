import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import scofaReducer from "./reducers/scofaReducer";

const store = createStore(scofaReducer, applyMiddleware(thunk));

export default store;