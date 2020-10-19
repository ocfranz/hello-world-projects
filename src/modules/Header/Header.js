import React from "react";
import PropTypes from "prop-types";

import { HeaderStyled, HeaderWrapper } from "./styles";
import Brand from "../../components/Brand";
const Header = (props) => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Brand />
      </HeaderWrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {};

export default Header;
