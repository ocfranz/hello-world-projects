import styled from "styled-components";
import { media } from "../../styles/minxins";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`
  flex-direction: row;
  padding-top: 22px;
  `}
`;

const Feed = styled.div`
  width: 50%;
`;

export { HomeWrapper, Feed };
