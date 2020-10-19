import React from "react";
import PropTypes from "prop-types";

import { GridContainerStyled } from "./styles";

const GridContainer = ({ row, children }) => {
  return <GridContainerStyled row={row}>{children}</GridContainerStyled>;
};

GridContainer.defaultProps = {
  row: 1,
};
GridContainer.propTypes = {
  gap: PropTypes.number,
  children: React.Children,
};

export default GridContainer;
