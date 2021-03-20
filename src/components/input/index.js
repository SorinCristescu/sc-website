import React from "react";
import PropTypes from "prop-types";

import { Container, ErrorText } from "./styles";
const Input = (props) => {
  const {
    label,
    type,
    id,
    name,
    value,
    handleChange,
    handleBlur,
    error,
    errorText,
  } = props;
  return (
    <>
      <Container>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {/* <label
        // htmlFor={id}
        >
          {label}
        </label>
        <span class="focus-border">
          <i></i>
        </span> */}
      </Container>
      {error && <ErrorText>{errorText}</ErrorText>}
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

export default Input;
