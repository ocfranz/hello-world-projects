import styled from "styled-components";

const BrandStyled = styled.span`
  font-size: 30px;
  line-height: 32px;
  font-weight: bold;
  &:after {
    content: ".";
    font-size: 70px;
    margin-left: 5px;
  }
`;

export { BrandStyled };
