import styled from "styled-components";
import { noBorder, InputBasic, Pointer } from "../../styles/utils";

const SearchBarStyled = styled.div`
  width: 100%;
  background-color: #2e3141;
  border-radius: 5px;
`;
const SearchBarWrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  input {
    background-color: #222433;
    height: 30px;
    font-size: 16px;
    width: calc(100% - 40px);
    padding: 3px 10px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
    ${noBorder}
    ${InputBasic}
  }
`;

const IconWrapper = styled.div`
  width: 40px;
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
