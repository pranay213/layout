import React from "react";
import "./style.css";

const DisplayMsg = (props) => {
  const { msgData, valvesData } = props;
  return valvesData.map((item, index) => {
    // let newRight =item.right-20%;
    let newval = item.right.replace(/%/g, "");
    newval = parseInt(newval - 12) + "%";
    console.log("newval", newval);
    let newDimensions = {
      ...item,
      right: newval,
      //   border: "0.1px solid black",
    };

    return (
      <div
        className="msg-display"
        style={{
          height: 10,
          width: 40,
          ...newDimensions,
          transform: [" rotate(0deg)"],
          backgroundColor: "#fff",
          borderRadius: "0px 2px 2px 2px",
          zIndex: 50,
          border: "0.1px dotted",
        }}
      >
        <div className="arrow-left"></div>
      </div>
    );
  });
};

export default DisplayMsg;
