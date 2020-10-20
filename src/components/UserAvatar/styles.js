import styled from "styled-components";
import { Pointer } from "../../styles/utils";

const UserAvatarStyled = styled.img`
  width: 35px;
  height: 35px;
  vertical-align: middle;
  border-radius: ${(props) => {
    if (props.type === "semi-rounded") return "25%";
    return "50%";
  }};
`;

export { UserAvatarStyled };
