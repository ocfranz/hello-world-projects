import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { TOGGLE_LOGIN_MODAL } from "../../constants";
import {
  ModalLoginStyled,
  LoginForm,
  LoginFormItem,
  CloseModalButton,
} from "./styles";

import ModalBase from "../../components/ModalBase";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import { loginUser } from "../../actions/user";

const ModalLogin = ({ visible }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);
  const modalRef = React.useRef(null);
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const onInputChange = (e, id) => {
    const { value } = e.target;

    switch (id) {
      case "username":
        setFormData((prevState) => ({ ...prevState, username: value }));
        break;
      case "password":
        setFormData((prevState) => ({ ...prevState, password: value }));
        break;
      default:
        throw new Error("Input id invalid");
    }
  };

  const handleClickOutside = (event, ref) => {};

  const handleCloseModal = () => {
    setFormData((prevState) => ({ password: "", username: "" }));
    dispatch({ type: TOGGLE_LOGIN_MODAL, payload: false });
  };

  const doLogin = () => {
    const { username, password } = formData;
    dispatch(loginUser({ username, password }));
    
  };
  return (
    <ModalBase
      visible={visible}
      handleClickOutside={() => handleClickOutside("", modalRef)}
    >
      <ModalLoginStyled ref={modalRef}>
        <CloseModalButton onClick={handleCloseModal}>
          <Icon iconName="close" color="#ffffff" />
        </CloseModalButton>
        <LoginForm>
          <span>Login</span>
          <LoginFormItem>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => onInputChange(e, "username")}
            />
          </LoginFormItem>
          <LoginFormItem>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => onInputChange(e, "password")}
            />
          </LoginFormItem>
          <Button
            children={`${auth.isFetching ? "Logging ...." : "Login"}`}
            handleOnClick={doLogin}
          />
          <span>Create account</span>
        </LoginForm>
      </ModalLoginStyled>
    </ModalBase>
  );
};

ModalLogin.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default React.memo(ModalLogin);
