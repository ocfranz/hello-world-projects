import React from "react";
import PropTypes from "prop-types";

import { LayoutWrapper } from "./styles";
const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
