import React from "react";
import PropTypes from "prop-types";

import { GridStyled } from "./styles";
const Grid = ({ xs, sm, md, lg, xl, children }) => {
  return (
    <GridStyled xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      {children}
    </GridStyled>
  );
};

Grid.defaultProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24,
};

Grid.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  children: React.Children,
};

export default Grid;
