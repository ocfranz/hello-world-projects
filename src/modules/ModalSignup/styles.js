import styled from "styled-components";
import { media } from "../../styles/minxins";
import { ButtonBasic } from "../../styles/utils";

const ModalLoginStyled = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 100%;
  background-color: #010815;
  color: #ffffff;
  display: flex;
  align-items: center;
  position: relative;

  ${media.md`
    height: 50%;
    margin: 0 auto;
    width: 30%;
    border-radius: 10px;
  `}
`;
const CloseModalButton = styled.button`
  ${ButtonBasic}
  position : absolute;
  top: 5%;
  right: 5%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222433;
  border-radius: 30%;
`;

const LoginForm = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.md`
    width: 70%;
  `}
  span {
    font-size: 16px;
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  button {
    margin-top: 10px;
    font-weight: bold;
  }
`;

const LoginFormItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  input {
    color: #000000;
    font-size: 16px;
    line-height: 18px;
    background-color: #222433;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 0px 10px 20px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
    border-radius: 5px;
    border: none;
    border: 1px solid transparent;
    &:focus {
      border: 1px solid #688cfd;
      box-shadow: none;
      outline: none;
    }
  }
`;

export { ModalLoginStyled, LoginForm, LoginFormItem, CloseModalButton };
