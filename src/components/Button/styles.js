import styled from "styled-components";
import { media } from "../../styles/minxins";

const ButtonStyled = styled.button`
  padding: 15px 34px;
  margin: 0px 5px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: #ffffff;
  font-weight: bold;
  background-color: #9175db;
  display: flex;
  align-items: center;
  &:focus {
    box-shadow: none;
    outline: none;
  }

  ${media.lg`
  padding: 18px 45px;
  font-size: 16px;
  line-height: 24px;
  `}
`;

export { ButtonStyled };
