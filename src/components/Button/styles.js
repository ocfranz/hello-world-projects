import styled from "styled-components";
import { media } from "../../styles/minxins";
import { ButtonBasic } from "../../styles/utils";

const ButtonStyled = styled.button`
  ${ButtonBasic}
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  padding: 8px 20px;
  background: ${(props) => {
    if (props.outline) return "transparent";
    return "#688cfd";
  }};
  border-radius: 8px;
`;

export { ButtonStyled };
