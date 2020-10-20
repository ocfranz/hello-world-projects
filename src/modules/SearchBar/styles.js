import styled from "styled-components";
import { noBorder, InputBasic, Pointer } from "../../styles/utils";

const SearchBarStyled = styled.div`
  display: inline-block;
  max-width: 400px;
`;
const SearchBarWrapper = styled.div`
  display: flex;
  input {
    background-color: #222433;
    font-size: 16px;
    line-height: 20px;
    width: calc(100% - 60px);
    padding: 10px 0px 10px 20px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
    border-radius: 10px 0px 0px 10px;
    ${noBorder}
    ${InputBasic}
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222433;
  ${Pointer}
  svg {
    opacity: 0.5;
  }
`;

export { SearchBarStyled, SearchBarWrapper, IconWrapper };
