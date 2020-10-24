import React from "react";
import PropTypes from "prop-types";

import { ModalLoginStyled, LoginForm, LoginFormItem } from "./styles";
import ModalBase from "../../components/ModalBase";
import Button from "../../components/Button";

const ModalLogin = ({ visible }) => {
  return (
    <ModalBase visible={visible}>
      <ModalLoginStyled>
        <LoginForm>
          <span>Login</span>
          <LoginFormItem>
            <label htmlFor="username"></label>
            <input id="username" type="text" placeholder="Username" />
          </LoginFormItem>
          <LoginFormItem>
            <label htmlFor="password"></label>
            <input id="password" type="password" placeholder="Password" />
          </LoginFormItem>
          <Button children="Login" handleOnClick={() => {}} />
        </LoginForm>
      </ModalLoginStyled>
    </ModalBase>
  );
};

ModalLogin.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ModalLogin;
