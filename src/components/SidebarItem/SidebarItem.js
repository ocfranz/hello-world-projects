import React, { useState } from "react";
import PropTypes from "prop-types";

import { SidebarItemStyled } from "./styles";
import Icon from "../Icon";

const SidebarItem = ({ iconName, children }) => {
  const [color, setColor] = useState("");
  return (
    <SidebarItemStyled>
      <div>
        <Icon iconName={iconName} size={25} color={"#ffffff"} />
        <div>{children}</div>
      </div>
    </SidebarItemStyled>
  );
};

SidebarItem.propTypes = {};

export default SidebarItem;
