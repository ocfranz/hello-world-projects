import styled from "styled-components";

const GridContainerStyled = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => {
    if (props.row === 1) return "row";
  }};
`;

const GridStyled = styled.div`
  width: ${(props) => {
    if (props.xs === 24) return "100%";
    return `${100 / props.xs}%`;
  }};
`;

export { GridContainerStyled, GridStyled };
