import styled from "styled-components";

const SidebarStyled = styled.div`
  width: 20%;
  height: 100%;
`;

const SidebarWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100%;
`;

const SidebarHeading = styled.div`
  height: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  span {
    display: block;
    line-height: 18px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    text-align: right;
    &:before {
      content: "Hello";
      display: block;
      text-align: left;
    }
    &:after {
      content: "projects";
      display: block;
    }
  }
`;

const SidebarMenu = styled.div`
  height: calc(100% - 70px);
`;

export { SidebarStyled, SidebarWrapper, SidebarHeading, SidebarMenu };
