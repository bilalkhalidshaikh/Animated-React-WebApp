import React, { useRef, useLayoutEffect } from "react";
import Program from "../images/Kids Studying from Home-pana.png";
import "./css/front.css";

export default function Front() {
  return (
    <div className="front-flex">
      <Frontimg />
      <Frontcar />
    </div>
  );
}

function Frontimg() {
  var imgdiv = useRef(null);

  useLayoutEffect(() => {
    var keyframes = [
      { opacity: "0", transform: "translate3d(-100%, 0, 0)", offset: 0 },
      { opacity: "1", transform: "none", offset: 1 },
    ];
    var timing = { duration: 1200, iterations: 1 };
    imgdiv.current.animate(keyframes, timing);
  });

  return (
    <div ref={imgdiv}>
      <img className="front-img" src={Program} alt="programming" />
    </div>
  );
}

function Frontcar() {
  var para = useRef(null);
  useLayoutEffect(() => {
    var keyframes = [
      { opacity: "0", transform: "translate3d(2000px, 0, 0)", offset: 0 },
      { opacity: "1", transform: "none", offset: 1 },
    ];
    var timing = { duration: 1000, iterations: 1 };
    para.current.animate(keyframes, timing);
  });
  return (
    <div className="front-circle">
      <div ref={para} className="front-para">
        <p>
          Start everyday
          <br />  a term ahead.
        </p>
        <button className="front-button">LERAN MORE</button>
        <a href=""></a>
      </div>
    </div>
  );
}
