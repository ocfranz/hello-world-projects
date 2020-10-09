import React from "react";
import { NotFoundStyled } from "./styles";

import Button from "../../components/Button";

const NotFound = (props) => {
  const handleOnClick = () => {
    window.location.href = "/";
  };
  return (
    <NotFoundStyled>
      <span>Página no encontrada</span>
      <Button children="Ver productos" handleOnClick={handleOnClick} />
    </NotFoundStyled>
  );
};

export default NotFound;
