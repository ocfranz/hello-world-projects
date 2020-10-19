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

const HomeMain = styled.main`
  width: 100%;
  margin-top: 50px;
  display: block;
`;

const Feed = styled.div`
  width: 55%;
  padding: 10px 0px;
`;
const FeedList = styled.div`
  margin-top: 15px;
  height: auto;
`;

export { HomeWrapper, HomeMain, Feed, FeedList };
