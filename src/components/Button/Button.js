import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./styles";

const Button = ({ children, handleOnClick }) => {
  return (
    <ButtonStyled onClick={handleOnClick} role="button">
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  active: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;
