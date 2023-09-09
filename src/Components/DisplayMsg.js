import React from "react";
import "./style.scss";

const DisplayMsg = (props) => {
  const { msgData, valvesData, toggleMsg } = props;
  return valvesData.map((item, index) => {
    let newval = item.right.replace(/%/g, "");
    newval = parseInt(newval - 12) + "%";
    console.log("msgDisp", item.msgDisp);
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
            width: 40,
            ...newDimensions,
            transform: [" rotate(0deg)"],
            backgroundColor: "rgba(45,23,78,0.45)",
            borderRadius: "0px 2px 2px 2px",
            zIndex: 1,
            //   border: "0.1px dotted",
          }}
        >
          <div className="arrow-left"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              top: "-50%",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <p
                style={{
                  fontSize: 5,
                  color: "#000",
                  textShadow: "0px 0px 1px white",
                }}
              >
                valve {item.id}
              </p>
            </div>
            <button
              className="close-btn"
              style={{
                fontSize: 5,
                position: "relative",
                right: "-10%",
                bottom: "-20%",
                boxShadow: "0px 0px 2px black",
                padding: "0px 2px",
                color: "#",
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
