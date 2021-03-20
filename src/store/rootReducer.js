import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import alertReducer from "./alert/reducer";
import businessReducer from "./business/reducer";
import estimatorReducer from "./estimator/reducer";

// COMBINED REDUCERS
export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  business: businessReducer,
  estimator: estimatorReducer,
});
