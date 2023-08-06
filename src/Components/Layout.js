import React, { useEffect, useState } from "react";
import layout from "../images/layout2.jpg";
import Circile from "./Circile";
import "./style.css";
import Valve from "../svg/Valve";

const Layout = () => {
  const [valve1, setValve1] = useState(true);
  const [valve2, setValve2] = useState(true);
  const [valve3, setValve3] = useState(true);
  const [valve4, setValve4] = useState(true);
  const [valve5, setValve5] = useState(true);
  const [valve6, setValve6] = useState(true);
  const [valve7, setValve7] = useState(true);
  const [valve8, setValve8] = useState(true);
  const [valve9, setValve9] = useState(true);

  const [waterCol, setWaterCol] = useState("#416BDF");

  useEffect(() => {
    setTimeout(() => {
      if (waterCol === "#416BDF") setWaterCol("#99C0E3");
      else {
        setWaterCol("#89DB02");
      }
    }, 500);
  }, [waterCol, valve1]);

  const Valve1Click = () => {
    setValve1(!valve1);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve2Click = () => {
    setValve2(!valve2);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve3Click = () => {
    setValve3(!valve3);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve4Click = () => {
    setValve4(!valve4);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve5Click = () => {
    setValve5(!valve5);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve6Click = () => {
    setValve6(!valve6);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve7Click = () => {
    setValve7(!valve7);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve8Click = () => {
    setValve8(!valve8);
    // window.scroll({ top: 0, behavior: "smooth" });
  };
  const Valve9Click = () => {
    setValve9(!valve9);
    // window.scroll({ top: 0, behavior: "smooth" });
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

      <Valve
        className="valve-container2"
        fill={valve2 ? waterCol : "#ff0000"}
        onClick={Valve2Click}
      />
      <Valve
        className="valve-container3"
        fill={valve3 ? waterCol : "#ff0000"}
        onClick={Valve3Click}
      />
      <Valve
        className="valve-container4"
        fill={valve4 ? waterCol : "#ff0000"}
        onClick={Valve4Click}
      />
      <Valve
        className="valve-container5"
        fill={valve5 ? waterCol : "#ff0000"}
        onClick={Valve5Click}
      />
      <Valve
        className="valve-container6"
        fill={valve6 ? waterCol : "#ff0000"}
        onClick={Valve6Click}
      />
      <Valve
        className="valve-container7"
        fill={valve7 ? waterCol : "#ff0000"}
        onClick={Valve7Click}
      />
      <Valve
        className="valve-container8"
        fill={valve8 ? waterCol : "#ff0000"}
        onClick={Valve8Click}
      />
      <Valve
        className="valve-container9"
        fill={valve9 ? waterCol : "#ff0000"}
        onClick={Valve9Click}
      />

      <Circile />
    </div>
  );
};

export default Layout;
