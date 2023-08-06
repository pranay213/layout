import React, { useEffect, useState } from "react";
import layout from "../images/layout2.jpg";
import Circile from "./Circile";
import "./style.css";
import Valve from "../svg/Valve";

export const Layout = () => {
  const [valve1, setValve1] = useState(true);
  const [waterCol, setWaterCol] = useState("#416BDF");

  useEffect(() => {
    setTimeout(() => {
      if (waterCol === "#416BDF") setWaterCol("#99C0E3");
      else {
        setWaterCol("#416BDF");
      }
    }, 500);
  }, [waterCol, valve1]);

  const Valve1Click = () => {
    setValve1(!valve1);
  };
  return (
    <div className="layout-container">
      <div
        style={{
          width: "90%",
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          border: "10px solid black",
          margin: "auto",
          marginTop: "33%",
        }}
      >
        <img
          src={layout}
          style={{ width: "100%", height: "100%" }}
          alt="layout"
        />
      </div>
      <Valve
        className="valve-container"
        fill={valve1 ? waterCol : "#ff0000"}
        onClick={Valve1Click}
      />
      <Valve className="valve-container2" />
      <Valve className="valve-container3" />
      <Valve className="valve-container4" />
      <Valve className="valve-container5" />
      <Valve className="valve-container6" />
      <Valve className="valve-container7" />
      <Valve className="valve-container8" />
      <Valve className="valve-container9" />

      <Circile />
    </div>
  );
};
