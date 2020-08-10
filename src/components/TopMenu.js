import React from "react";
import AppBar from "./AppBar";
import { Button, Heading } from "grommet";
import { Code } from "grommet-icons";

const TopMenu = ({ onHandleSideBar }) => {
  return (
    <AppBar>
      {/* <Button icon={<Code />} onClick={() => {}} /> */}
      <Heading level="2" margin="none">
        GLITCH
      </Heading>
      <Button icon={<Code />} onClick={() => onHandleSideBar()} />
    </AppBar>
  );
};

export default TopMenu;
