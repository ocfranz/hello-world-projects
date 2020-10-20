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

const HomeMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Feed = styled.div`
  width: 100%;
  padding: 10px 0px;
  ${media.md`
    width: 100%;
  `}
  ${media.lg`
    width: 80%;
  `}
  ${media.xl`
    width: 65%;
  `}
`;
const FeedList = styled.div`
  height: auto;
`;

const Suggestion = styled.div`
  display: none;
  padding: 10px 0px;
  ${media.md`
    width: 100%;
  `}
  ${media.lg`
    width: 20%;
    display : block;
  `}
  ${media.xl`
    width: 35%;
    display : block;
  `}
`;

const SuggestionWrapper = styled.div`
  margin-left: 20px;
  background-color: #010815;
`;

export { HomeWrapper, HomeMain, Feed, FeedList, Suggestion, SuggestionWrapper };
