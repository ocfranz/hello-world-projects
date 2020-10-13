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

const noBorder = css`
  border: none;
`;

const InputBasic = css`
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

const Pointer = css`
  cursor: pointer;
`;

export { SimpleA, ButtonBasic, noBorder, InputBasic, Pointer };
