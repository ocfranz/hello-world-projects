import styled from "styled-components";

const NotFoundStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 18px;
    display: block;
    font-weight: bold;
  }
  button {
    padding: 13px 45px;
    margin-top: 10px;
  }
`;

export { NotFoundStyled };
