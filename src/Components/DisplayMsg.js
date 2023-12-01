import React from "react";
import "./style.scss";

const DisplayMsg = (props) => {
  const { msgData, valvesData, toggleMsg } = props;
  return valvesData.map((item, index) => {
    let newval = item.right.replace(/%/g, "");
    newval = parseInt(newval - 18) + "%";
    // console.log("msgDisp", item.msgDisp);
    let newDimensions = {
      ...item,
      right: newval,
    };
    if (item.msgDisp) {
      return (
        <div
          className="msg-display"
          style={{
            height: 10,
            width: 65,
            ...newDimensions,
            transform: ["rotate(0deg)"],
            backgroundColor: "rgba(45,23,78,0.85)",
            borderRadius: "0px 2px 2px 2px",
            zIndex: 100,
            //   border: "0.1px dotted",
          }}
          key={index}
        >
          <div className="text-white text-center flex flex-row items-center justify-between ">
            <p className="text-[7px] m-auto">{`valve ${item.id}`}</p>
            <button
              className="close-btn text-[5px]"
              style={{
                position: "relative",
                right: "-10%",
                bottom: "-20%",
                boxShadow: "0px 0px 2px black",
                padding: "0px 2px",
                color: "#000",
                fontWeight: "600",
                border: "none",
                borderRadius: 2,
              }}
              onClick={() => toggleMsg(item.id)}
            >
              X
            </button>
          </div>
        </div>
      );
    }
  });
};

export default DisplayMsg;
