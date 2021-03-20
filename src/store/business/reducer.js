import {
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAIL,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  CREATE_CONTRACT_SUCCESS,
  CREATE_CONTRACT_FAIL,
  SEND_CONTRACT_SUCCESS,
  SEND_CONTRACT_FAIL,
  CREATE_OFFER_SUCCESS,
  CREATE_OFFER_FAIL,
  SEND_OFFER_SUCCESS,
  SEND_OFFER_FAIL,
  EXECUTE_PAYMENT_SUCCESS,
  EXECUTE_PAYMENT_FAIL,
  GET_PRICE_LIST_SUCCESS,
  GET_PRICE_LIST_FAIL,
  UPDATE_PRICE_LIST_SUCCESS,
  UPDATE_PRICE_LIST_FAIL,
  CREATE_ITEM_PRICE_LIST_SUCCESS,
  CREATE_ITEM_PRICE_LIST_FAIL,
  DELETE_ITEM_PRICE_LIST_SUCCESS,
  DELETE_ITEM_PRICE_LIST_FAIL,
} from "./types";

const initialState = {
  projects: [],
  project: null,
  priceList: [],
  loading: true,
};

// BUSINESS REDUCER
const businessReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PROJECT_SUCCESS:
    case GET_ALL_PROJECTS_SUCCESS:
    case GET_PROJECT_SUCCESS:
    case UPDATE_PROJECT_SUCCESS:
    case DELETE_PROJECT_SUCCESS:
    case EXECUTE_PAYMENT_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case CREATE_PROJECT_FAIL:
    case GET_ALL_PROJECTS_FAIL:
    case GET_PROJECT_FAIL:
    case UPDATE_PROJECT_FAIL:
    case DELETE_PROJECT_FAIL:
    case EXECUTE_PAYMENT_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default businessReducer;
