import styled, { keyframes } from "styled-components";

const showAnimation = keyframes`
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  animation-name: ${showAnimation};
  animation-duration: 0.6s;
  display: ${(props) => {
    if (props.visible) return "block";
    return "none";
  }};
`;

const ModalDialog = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export { ModalStyled, ModalDialog };
