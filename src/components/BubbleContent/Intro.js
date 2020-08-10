import React from "react";
import { Button } from "grommet";
import { useChoicesContext } from "../../contexts/ChoicesContext"
import { useHistory } from 'react-router-dom';

const Intro = () => {
  const history = useHistory()
const { setChoices } = useChoicesContext()
const handleChoice = () => {
    history.push("/intro/challenge")
    setChoices({ intro: true })
}
  return (
    <>
      <p>Hi! I'm Glitch the Ghost!</p>
      <p>Today we'll embark on a journey of learning!</p>
      <p>
        I'll ask you questions, you provide the answers! Let's make this roll,
        are you up for the challenge?
      </p>
      <div className="buttons-container">
        {/* <Button secondary label="No" color="orange" size="large" /> */}
        <Button
          primary
          label="Let's go!"
          color="orange"
          size="large"
          style={{ marginLeft: "1em", cursor: "pointer", zIndex: 6 }}
          hoverIndicator
        onClick={() => handleChoice()}
        />
      </div>
    </>
  );
};

export default Intro;
