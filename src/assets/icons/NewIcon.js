import React from "react";

const NewIcon = ({ color = "#231F20", size = 30 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  );
};

NewIcon.propTypes = {};

export default NewIcon;
