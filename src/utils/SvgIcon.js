import React from "react";
import { ReactSVG } from "react-svg";

const SvgIcon = ({ name }) => {
  const svg = require(`../../node_modules/devicon/icons/${name}/${name}-original.svg`);

  return (
    <ReactSVG
      src={svg}
      beforeInjection={(svg) => {
        svg.setAttribute("style", "width: 100px");
      }}
    />
  );
};

export default SvgIcon;
