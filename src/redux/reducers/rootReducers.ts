import { combineReducers } from "redux";
import countryReducer from "./countryReducers";

const RootReducer = combineReducers({
  country: countryReducer
});

export default RootReducer