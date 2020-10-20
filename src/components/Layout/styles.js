import styled from "styled-components";
import { media } from "../../styles/minxins";
const LayoutWrapper = styled.div`
  display: flex;
  margin: 0px 15px;
  ${media.sm`
    margin: 0px 20px;
  `}
  ${media.md`
    margin: 0px 40px;
  `}
  ${media.lg`
    margin: 0px 80px;
  `}
  ${media.xl`
    margin: 0px 150px;
  `}
`;
export { LayoutWrapper };
