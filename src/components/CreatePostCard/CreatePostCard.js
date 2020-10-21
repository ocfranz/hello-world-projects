import React from "react";
import PropTypes from "prop-types";

import { CreatePostCardStyled } from "./styles";
const CreatePostCard = (props) => {
  return (
    <CreatePostCardStyled>
      <div>
        <span>Submit new project</span>
      </div>
    </CreatePostCardStyled>
  );
};

CreatePostCard.propTypes = {};

export default CreatePostCard;
