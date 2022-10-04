import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer.js";

const rootReducer = combineReducers({
  cart:cartReducer
})

export default rootReducer;