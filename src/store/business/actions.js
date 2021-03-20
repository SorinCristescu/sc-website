import axios from "axios";

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

// PROJECTS

// Create project.
export const createProject = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: CREATE_PROJECT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: CREATE_PROJECT_FAIL,
    });
  }
};

// Get all projects.
export const getProjects = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/business/projects`,
      config
    );

    dispatch({
      type: GET_ALL_PROJECTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: GET_ALL_PROJECTS_FAIL,
    });
  }
};

// Get project by id.
export const getProject = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/business/projects/${id}`,
      config
    );

    dispatch({
      type: GET_PROJECT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: GET_PROJECT_FAIL,
    });
  }
};

// Update project.
export const updateProject = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.put(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: UPDATE_PROJECT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: UPDATE_PROJECT_FAIL,
    });
  }
};

// Delete project by id.
export const deleteProject = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.delete(
      `${process.env.BASE_URL}/business/projects/${id}`,
      config
    );

    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: DELETE_PROJECT_FAIL,
    });
  }
};

// CONTRACTS

// Create contract.
export const createContract = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: CREATE_CONTRACT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: CREATE_CONTRACT_FAIL,
    });
  }
};

// Send contract.
export const sendContract = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: SEND_CONTRACT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: SEND_CONTRACT_FAIL,
    });
  }
};

// OFFERS

// Create offer.
export const createOffer = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: CREATE_OFFER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: CREATE_OFFER_FAIL,
    });
  }
};

// Send offer.
export const sendOffer = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: SEND_OFFER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: SEND_OFFER_FAIL,
    });
  }
};

// PAYMENTS

// Execute payment.
export const executePayment = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: EXECUTE_PAYMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: EXECUTE_PAYMENT_FAIL,
    });
  }
};

// PRICE LIST

// Get price list.
export const getPriceList = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/business/projects`,
      config
    );

    dispatch({
      type: GET_PRICE_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: GET_PRICE_LIST_FAIL,
    });
  }
};

// Update price list.
export const updatePriceList = ({ name, email, password, language }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.put(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: UPDATE_PRICE_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: UPDATE_PRICE_LIST_FAIL,
    });
  }
};

// Create item price list.
export const createItemPriceList = ({
  name,
  email,
  password,
  language,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.put(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: CREATE_ITEM_PRICE_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: CREATE_ITEM_PRICE_LIST_FAIL,
    });
  }
};

// Delete item price list.
export const createItemPriceList = ({
  name,
  email,
  password,
  language,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, language });
  try {
    const response = await axios.delete(
      `${process.env.BASE_URL}/business/projects`,
      body,
      config
    );

    dispatch({
      type: DELETE_ITEM_PRICE_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", true)));
    }
    dispatch({
      type: DELETE_ITEM_PRICE_LIST_FAIL,
    });
  }
};
