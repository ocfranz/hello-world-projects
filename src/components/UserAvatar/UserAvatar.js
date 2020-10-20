import React from "react";
import PropTypes from "prop-types";
import { UserAvatarStyled } from "./styles";

const UserAvatar = ({ src, type }) => {
  return <UserAvatarStyled alt="user avatar" src={src} type={type} />;
};

UserAvatar.defaultProps = {
  type: "rounded",
  src:
    "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490",
};
UserAvatar.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
};

export default UserAvatar;
