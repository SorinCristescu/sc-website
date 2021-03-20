import axios from "axios";

import { UPDATE_ESTIMATION_SUCCESS, RESET_ESTIMATION_SUCCESS } from "./types";

// UPDATE ESTIMATION.
export const updateEstimation = ({}) => async (dispatch) => {
  const updatedEstimation = {};
  const price = () => {
    return;
    //something to be calculate here
  };
  dispatch({
    type: UPDATE_ESTIMATION_SUCCESS,
    payload: updatedEstimation,
  });
};

// RESET ESTIMATION.
export const resetEstimation = () => async (dispatch) => {
  dispatch({
    type: RESET_ESTIMATION_SUCCESS,
    payload: {},
  });
};
