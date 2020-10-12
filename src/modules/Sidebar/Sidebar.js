import React from "react";
import PropTypes from "prop-types";

import {
  SidebarStyled,
  SidebarWrapper,
  SidebarHeading,
  SidebarNav,
} from "./styles";
import Icon from "../../components/Icon";
import SidebarItem from "../../components/SidebarItem";
import Button from "../../components/Button";
const Sidebar = (props) => {
  return (
    <SidebarStyled>
      <SidebarWrapper>
        <SidebarHeading>
          <span>HWP</span>
        </SidebarHeading>
        <SidebarNav role="navigation">
          <SidebarItem iconName="home" children="home" />
          <SidebarItem iconName="project" children="projects" />
          <SidebarItem iconName="settings" children="settings" />
          <Button children="create project" handleOnClick={() => {}} />
        </SidebarNav>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
