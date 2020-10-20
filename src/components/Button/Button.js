import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./styles";

const Button = ({ children, handleOnClick, outline }) => {
  return (
    <ButtonStyled onClick={handleOnClick} role="button" outline={outline}>
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  active: false,
  outline: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  handleOnClick: PropTypes.func.isRequired,
  outline: PropTypes.bool,
};

export default Button;
