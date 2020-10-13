import React from "react";
import PropTypes from "prop-types";

import { SearchBarStyled, SearchBarWrapper, IconWrapper } from "./styles";
import Icon from "../../components/Icon";
const SearchBar = (props) => {
  return (
    <SearchBarStyled>
      <SearchBarWrapper>
        <input />
        <IconWrapper role="button">
          <Icon iconName="search" size={25} color="#ffffff" />
        </IconWrapper>
      </SearchBarWrapper>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
