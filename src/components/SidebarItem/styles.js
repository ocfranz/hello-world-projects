import styled from "styled-components";
import { SimpleA } from "../../styles/utils";

const SidebarItemStyled = styled.a`
  padding: 10px 0px;
  ${SimpleA}
  display: flex;
  opacity: ${(props) => {
    if (props.active) return "1";
    return "0.7";
  }};
  div {
    display: flex;
    align-items: center;
    div {
      margin: 0px 10px;
      text-transform: capitalize;
      font-size: 16px;
    }
  }
`;

export { SidebarItemStyled };
