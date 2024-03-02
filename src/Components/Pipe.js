import React from "react";
import "./pipe.css";

const Pipe = (props) => {
  const { style } = props;
  return (
    <div className={`absolute pipe     `} style={style}>
      <div className="first-pipe"></div>

      <div className="fifth-pipe"></div>

      <div className="second-pipe"></div>

      <div className="third-pipe"></div>

      <div className="fourth-pipe"></div>

      <div className="sixth-pipe"></div>
    </div>
  );
};

export default Pipe;
