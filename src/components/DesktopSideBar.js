import React, { useContext } from "react";
import { Box, Collapsible } from "grommet";
import userContext from "../contexts/UserContext"

const DesktopSideBar = ({ showSidebar }) => {
  const userData = useContext(userContext)
  console.log(userData)
  return (
    <Collapsible direction="horizontal" open={showSidebar}>
      <Box
        flex
        width="medium"
        background="light-2"
        elevation="small"
        align="center"
        justify="center"
      >
        sidebar
      </Box>
    </Collapsible>
  );
};

export default DesktopSideBar;
