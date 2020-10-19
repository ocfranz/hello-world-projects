import React from "react";
import PropTypes from "prop-types";

import {
  SidebarStyled,
  SidebarWrapper,
  SidebarBody,
  SidebarHeading,
  SidebarNav,
} from "./styles";
import SidebarItem from "../../components/SidebarItem";
import Button from "../../components/Button";
const Sidebar = (props) => {
  return (
    <SidebarStyled>
      <SidebarWrapper>
        <SidebarBody>
          <SidebarHeading>
            <span>wworld</span>
          </SidebarHeading>
          <SidebarNav role="navigation">
            <SidebarItem iconName="home" children="home" />
            <SidebarItem iconName="project" children="projects" />
            <SidebarItem iconName="settings" children="settings" />
            <Button children="create project" handleOnClick={() => {}} />
          </SidebarNav>
        </SidebarBody>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
