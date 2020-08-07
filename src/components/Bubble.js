import React from 'react';
import Intro from "./Intro"
import ChooseChallenge from './ChooseChallenge';
import { useChoicesContext } from "../contexts/ChoicesContext"


const Bubble = () => {
    const { choices } = useChoicesContext()
    console.log(choices)
    return ( 
        <>
        <div className="container-bubble">
        <div className="bubble">
        {!choices.intro ?  <Intro /> : <ChooseChallenge />}
        </div>
        <div className="pointer"></div>
      </div>
      </>
     );
}
 
export default Bubble;