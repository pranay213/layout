import React from "react";

function Circile() {
  return <div style={circleStyle}></div>;
}
const circleStyle = {
  width: 2,
  height: 2,
  backgroundColor: "#ff0000",
  border: "1px solid red",
  borderRadius: 2,
  position: "absolute",
  top: "32.2%",
  left: "61%",
};

export default Circile;
