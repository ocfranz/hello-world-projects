import styled from "styled-components";

const ModalLoginStyled = styled.div`
  height: 50%;
  margin: 0 auto;
  width: 30%;
  border-radius: 10px;
  background-color: #010815;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

const LoginForm = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-size: 16px;
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
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

export { ModalLoginStyled, LoginForm, LoginFormItem };
