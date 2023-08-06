import React from "react";
import layout from "../images/layout2.jpg";
import Pump from "./Pump";
import Circile from "./Circile";
import "./style.css";

export const Layout = () => {
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
      <Circile />
    </div>
  );
};
