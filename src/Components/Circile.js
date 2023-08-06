import React from "react";

function Circile() {
  return <div style={circleStyle}></div>;
}
const circleStyle = {
  width: 10,
  height: 10,
  backgroundColor: "#ff0000",
  borderRadius: "50%",
  position: "absolute",
  top: "10%",
  left: "50%",
};

export default Circile;
