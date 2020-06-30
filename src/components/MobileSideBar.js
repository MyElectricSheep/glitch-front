import React from "react";
import { Box, Button, Layer } from "grommet";
import { FormClose } from "grommet-icons";

const MobileSideBar = ({ onHandleSideBar }) => {
  return (
    <Layer>
      <Box
        background="light-2"
        tag="header"
        justify="end"
        align="center"
        direction="row"
      >
        <Button icon={<FormClose />} onClick={() => onHandleSideBar(false)} />
      </Box>
      <Box fill background="light-2" align="center" justify="center">
        sidebar
      </Box>
    </Layer>
  );
};

export default MobileSideBar;
