import React from "react";
import PropTypes from "prop-types";

import { SearchBarStyled, SearchBarWrapper } from "./styles";
const SearchBar = (props) => {
  return (
    <SearchBarStyled>
      <SearchBarWrapper>
        <input />
      </SearchBarWrapper>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
