import React from "react";
import PropTypes from "prop-types";

import {
  SidebarStyled,
  SidebarWrapper,
  SidebarHeading,
  SidebarMenu,
} from "./styles";

const Sidebar = (props) => {
  return (
    <SidebarStyled>
      <SidebarWrapper>
        <SidebarHeading>
          <span>world</span>
        </SidebarHeading>
        <SidebarMenu></SidebarMenu>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
