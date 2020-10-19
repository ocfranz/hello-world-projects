import React from "react";
import PropTypes from "prop-types";
import { BrandStyled } from "./styles";
const Brand = ({ name }) => {
  return <BrandStyled>{name}</BrandStyled>;
};

Brand.defaultProps = {
  name: "Wipe",
};
Brand.propTypes = {
  name: PropTypes.string,
};

export default Brand;
