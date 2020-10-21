import styled from "styled-components";
import { Pointer, SimpleA } from "../../styles/utils";
import { media } from "../../styles/minxins";

const HeaderStyled = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08),
    0px 4px 8px rgba(50, 50, 71, 0.06);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0px 15px;
  justify-content: space-between;
  display: flex;
  ${media.sm`
    margin: 0px 20px;
  `}
  ${media.md`
    margin: 0px 40px;
  `}
  ${media.lg`
    margin: 0px 60px;
  `}
  ${media.xl`
    margin: 0px 100px;
  `}
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline;
      margin-left: 10px;
      &:first-child {
        display: none;
        ${media.md`
          display : inline;
        `}
      }
    }
    button {
      font-weight: bold;
    }
    a {
      ${SimpleA}
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      margin: 0px 10px;
    }
  }
`;

const CreatePost = styled.div`
  display: inline-block;
  vertical-align: middle;
  button {
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    padding: 6px;
    ${Pointer}
    border: 1px solid transparent;
    &:focus {
      outline: none;
      box-shadow: none;
      border: 1px solid #222433;
      border-radius: 5px;
    }
  }
`;

const UserAvatarWrapper = styled.div`
  ${Pointer}
  height: 100%;
  display: inline-block;
  border: 1px solid transparent;
  padding: 5px 5px 5px 10px;
  &:hover {
    border: 1px solid #222433;
    border-radius: 5px;
  }
  div {
    display: inline;
    font-size: 16px;
    margin-right: 10px;
    font-weight: bold;
  }
`;

export {
  HeaderStyled,
  HeaderWrapper,
  HeaderNav,
  UserAvatarWrapper,
  CreatePost,
};
