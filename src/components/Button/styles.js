import styled from "styled-components";
import { media } from "../../styles/minxins";
import { ButtonBasic } from "../../styles/utils";

const ButtonStyled = styled.button`
  ${ButtonBasic}
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;
  background: #688cfd;
  border-radius: 8px;
`;

export { ButtonStyled };
