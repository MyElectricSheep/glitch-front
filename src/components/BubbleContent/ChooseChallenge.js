import React from "react";
import { Box, Distribution, Text } from "grommet";
import styles from "./ChooseChallenge.module.css";
import SvgIcon from "../../utils/SvgIcon";

const ChooseChallenge = () => {
  const possibleChallenges = [
    {
      value: 50,
      title: "HTML5",
      color: "light-3",
      icon: <SvgIcon name="html5" />,
    },
    {
      value: 30,
      title: "CSS3",
      color: "light-3",
      icon: <SvgIcon name="css3" />,
    },
    {
      value: 50,
      title: "JavaScript",
      color: "light-3",
      icon: <SvgIcon name="javascript" />,
    },
    {
      value: 30,
      title: "React",
      color: "light-3",
      icon: <SvgIcon name="react" />,
    },
    {
      value: 50,
      title: "NodeJS",
      color: "light-3",
      icon: <SvgIcon name="nodejs" />,
    },
    {
      value: 30,
      title: "PostgreSQL",
      color: "light-3",
      icon: <SvgIcon name="postgresql" />,
    },
    {
      value: 30,
      title: "MongoDB",
      color: "light-3",
      icon: <SvgIcon name="mongodb" />,
    },
    {
      value: 30,
      title: "Python",
      color: "light-3",
      icon: <SvgIcon name="python" />,
    },
    {
      value: 30,
      title: "MongoDB",
      color: "light-3",
      icon: <SvgIcon name="mongodb" />,
    },
    {
      value: 30,
      title: "Python",
      color: "light-3",
      icon: <SvgIcon name="python" />,
    },
    // { value: 10, title: "Angular", color: "light-3", icon:<SvgIcon name="angular" /> },
  ];
  return (
    <div className={styles.flexContainer}>
      <p>Choose your challenge:</p>
      <Distribution
        fill
        basis="full"
        alignSelf="center"
        values={possibleChallenges}
      >
        {(value) => (
          <Box
            className={styles.challengeBox}
            pad="xsmall"
            background={value.color}
            fill
            justify="center"
            align="center"
            wrap
            // overflow="hidden"
            onClick={() => alert('wesh')}
          >
            {value.icon}
            <Text size="large">{value.title}</Text>
            
          </Box>
        )}
      </Distribution>
    </div>
  );
};

export default ChooseChallenge;
