import React from "react";
import Bubble from "./Bubble/Bubble"
import { Ghost } from "react-kawaii";
import { useGhostContext } from "../contexts/GhostContext"
import Background from "../assets/bg.jpeg";
import "../style/main.scss";

const AppBody = (props) => {
    const {ghostMood, setGhostMood} = useGhostContext()
    return (
        <div className="container-main-body">
         <Bubble />
        <div className="container-ghost">
          <Ghost size={240} mood={ghostMood} color="#E0E4E8" />
        </div>
        <section className="fog">
        <figure
          className="absolute-bg"
          style={{ backgroundImage: `url(${Background})` }}
        ></figure>
        <div className="fog__container">
          <div className="fog__img fog__img--first"></div>
          <div className="fog__img fog__img--second"></div>
        </div>
      </section>
      </div>
    )

};

export default AppBody;
