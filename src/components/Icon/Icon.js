import React from "react";
import PropTypes from "prop-types";

import IconHome from "./icons/Home";
import IconProject from "./icons/Project";
import IconSetting from "./icons/Settings";

const Icon = ({ iconName, size, color }) => {
  return (
    <>
      {iconName === "home" && <IconHome size={size} color={color} />}
      {iconName === "project" && <IconProject size={size} color={color} />}
      {iconName === "settings" && <IconSetting size={size} color={color} />}
    </>
  );
};
Icon.defaultProps = {
  size: 30,
  color: "#000000",
};
Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;