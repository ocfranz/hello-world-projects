import styled from "styled-components";
import { noBorder, InputBasic } from "../../styles/utils";
const SearchBarStyled = styled.div`
  width: 100%;
  background-color: #2e3141;
  border-radius: 5px;
`;
const SearchBarWrapper = styled.div`
  padding: 10px 20px;
  input {
    background-color: #222433;
    height: 30px;
    font-size: 16px;
    width: 100%;
    ${noBorder}
    ${InputBasic}
  }
`;

export { SearchBarStyled, SearchBarWrapper };
