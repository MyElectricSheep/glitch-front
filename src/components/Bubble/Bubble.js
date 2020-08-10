import React, { useEffect } from "react";
import Intro from "../BubbleContent/Intro";
import ChooseChallenge from "../BubbleContent/ChooseChallenge";
import { useChoicesContext } from "../../contexts/ChoicesContext";
import styles from "./Bubble.module.css";
import { Switch, Route, useLocation } from "react-router-dom";
import cn from 'classnames'

const Bubble = () => {
  const { choices, setChoices } = useChoicesContext();
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/intro/challenge' && setChoices({...choices, intro: true});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, setChoices]);

  return (
    <>
      <div className={styles.containerBubble} >
        <div className={cn(styles.bubble, choices.intro && styles.wider)}>
                <Switch>
                <Route path="/intro/challenge">
                    <ChooseChallenge />
                  </Route>
                  <Route path="/intro">
                    <Intro /> 
                  </Route>
                </Switch>
        </div>
        <div className={styles.pointer}></div>
      </div>
    </>
  );
};

export default Bubble;
