import styled from "styled-components";

const SidebarStyled = styled.div`
  width: 20%;
  height: 100%;
`;

const SidebarWrapper = styled.div`
  width: 60%;
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
  }
`;

const SidebarNav = styled.nav`
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`;


export {
  SidebarStyled,
  SidebarWrapper,
  SidebarHeading,
  SidebarNav,
};
