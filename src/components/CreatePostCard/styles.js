import styled from "styled-components";
import { remy } from "../../styles/functions";
import { Pointer } from "../../styles/utils";

const CreatePostCardStyled = styled.div`
  width: 100%;
  margin-bottom: 15px;
  div {
    background-color: #010815;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    padding: ${remy(40)} ${remy(30)} ${remy(40)} ${remy(30)};

    ${Pointer}
  }
  span {
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    opacity: 0.6;
  }
`;

export { CreatePostCardStyled };
