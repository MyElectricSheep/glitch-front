import React from "react";
import AppBar from "./AppBar";
import { Button, Heading } from "grommet";
import { Sign, Code } from "grommet-icons";

const TopMenu = ({ onHandleSideBar }) => {
  return (
    <AppBar>
      <Button icon={<Code />} onClick={() => {}} />
      <Heading level="3" margin="none">
        GLITCH
      </Heading>
      <Button icon={<Sign />} onClick={() => onHandleSideBar()} />
    </AppBar>
  );
};

export default TopMenu;
