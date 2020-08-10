import React from "react";
import { Box, Distribution, Text } from "grommet";
import styles from "./ChooseChallenge.module.css";
import SvgIcon from "../../utils/SvgIcon";
import useWindowSize from "../../utils/useWindowSize";

const ChallengeBox = ({ value }) => {
  const { width } = useWindowSize();

  return (
    <Box
      className={styles.challengeBox}
      pad={width < 980 ? "medium" : "xsmall"}
      background={value.color}
      fill
      justify="center"
      align="center"
      alignContent="center"
      wrap
      basis="auto"
      onClick={() => alert("wesh")}
    >
      {value.icon}
      <Text size="large">{value.title}</Text>
    </Box>
  );
};

const ChooseChallenge = () => {
  const { width } = useWindowSize();

  const possibleChallenges = [
    {
      value: 55,
      title: "HTML5",
      color: "light-3",
      icon: <SvgIcon name="html5" />,
    },
    {
        value: 50,
        title: "JavaScript",
        color: "light-3",
        icon: <SvgIcon name="javascript" />,
      },
      {
        value: 45,
        title: "NodeJS",
        color: "light-3",
        icon: <SvgIcon name="nodejs" />,
      },
    {
      value: 30,
      title: "CSS3",
      color: "light-3",
      icon: <SvgIcon name="css3" />,
    },

    {
      value: 25,
      title: "React",
      color: "light-3",
      icon: <SvgIcon name="react" />,
    },

    {
      value: 20,
      title: "PostgreSQL",
      color: "light-3",
      icon: <SvgIcon name="postgresql" />,
    },
    {
      value: 15,
      title: "MongoDB",
      color: "light-3",
      icon: <SvgIcon name="mongodb" />,
    },
    {
      value: 10,
      title: "Python",
      color: "light-3",
      icon: <SvgIcon name="python" />,
    },
    // {
    //   value: 30,
    //   title: "MongoDB",
    //   color: "light-3",
    //   icon: <SvgIcon name="mongodb" />,
    // },
    // {
    //   value: 30,
    //   title: "Python",
    //   color: "light-3",
    //   icon: <SvgIcon name="python" />,
    // },
    // { value: 10, title: "Angular", color: "light-3", icon:<SvgIcon name="angular" /> },
  ];
  return (
    <div className={styles.flexContainer}>
      <p>Choose your challenge:</p>
      {width < 980 ? (
        <Box
          direction="column"
          //   border={{ color: 'brand', size: 'large' }}
          pad="medium"
        >
          {possibleChallenges.map((value) => {
            return <ChallengeBox key={`${value.title}-mobile`} value={value} />;
          })}
        </Box>
      ) : (
        <Distribution
          fill
          basis="full"
          alignSelf="center"
          values={possibleChallenges}
        >
          {(value) => (
            <ChallengeBox key={`${value.title}-desktop`} value={value} />
          )}
        </Distribution>
      )}
    </div>
  );
};

export default ChooseChallenge;
