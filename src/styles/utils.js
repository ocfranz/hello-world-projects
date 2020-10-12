import { css } from "styled-components";

const SimpleA = css`
  cursor: pointer;
`;

const ButtonBasic = css`
  outline: none;
  box-shadow: none;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

export { SimpleA, ButtonBasic };
