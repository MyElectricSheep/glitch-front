import React from "react";
import { Box } from "grommet";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="colorPrimary0"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "2" }}
    {...props}
  />
);

export default AppBar;
