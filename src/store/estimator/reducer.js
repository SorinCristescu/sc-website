import { UPDATE_ESTIMATION_SUCCESS, RESET_ESTIMATION_SUCCESS } from "./types";

const initialState = {
  estimation: {},
  loading: true,
};

// ESTIMATOR REDUCER
const estimatorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ESTIMATION_SUCCESS:
      return {
        estimation: payload,
        loading: false,
      };
    case RESET_ESTIMATION_SUCCESS:
      return {
        estimation: payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default estimatorReducer;
