import React, { useEffect, useState } from "react";
import layout from "../images/layout2.jpg";
import "./style.css";
import Valve from "../svg/Valve";
import Taps from "./Taps";
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
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
  const [msgDisp, setMsgDisp] = useState(false);
  const [tapsData, setTapData] = useState([
    {
      id: 1,
      left: "61.0%",
      bottom: "56.9%",
      fill: "red",
    },
    {
      id: 2,
      left: "62%",
      bottom: "53%",
      fill: "red",
    },
    {
      id: 3,
      left: "62.44%",
      bottom: "49.5%",
      fill: "red",
    },
    {
      id: 4,
      left: "62.64%",
      bottom: "45.6%",
      fill: "red",
    },
    {
      id: 5,
      left: "62.5%",
      bottom: "41.9%",
      fill: "red",
    },
    {
      id: 6,
      left: "69.2%",
      bottom: "40.9%",
      fill: "red",
    },
    {
      id: 7,
      left: "68.5%",
      bottom: "44.5%",
      fill: "red",
    },
    {
      id: 8,
      left: "67.5%",
      bottom: "48.4%",
      fill: "red",
    },
    {
      id: 9,
      left: "67.1%",
      bottom: "52.1%",
      fill: "red",
    },
    {
      id: 10,
      left: "66.1%",
      bottom: "55.95%",
      fill: "red",
    },
    {
      id: 11,
      left: "65.5%",
      bottom: "59.7%",
      fill: "red",
    },
  ]);
  const commonStyles = {
    position: "absolute",
    borderRadius: "50%",
  };

  const [dimentions, setDimentions] = useState({
    height: 5,
    width: 5,
    fill: "#A82904",
  });

  const [waterCol, setWaterCol] = useState("#416BDF");

  useEffect(() => {
    setTimeout(() => {
      if (waterCol === "#006100") setWaterCol("#99C0E3");
      else {
        setWaterCol((prev) => "#006100");
      }
    }, 1000);
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
  const displayMsg = () => {
    setMsgDisp(!msgDisp);
  };

  useEffect(() => {
    console.log({
      windowWidth,
      windowHeight,
    });
  }, []);
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
        onDoubleClick={displayMsg}
      />
      {msgDisp && (
        <div
          className="valve-container "
          style={{
            height: 80,
            width: "20%",
            backgroundColor: "#FFFEE0",
            left: "60%",
            borderRadius: "5px 5px 0px 5px",
            zIndex: 10,
            border: "1px solid black",
          }}
        >
          <div className="arrow-left"></div>
          <p style={{ transform: "rotate(180deg)" }}>Valve Number :5</p>
          <p style={{ transform: "rotate(180deg)" }}>
            {"Status"}
            {valve1 ? "ON" : "OFF"}
          </p>
        </div>
      )}

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

      {tapsData &&
        tapsData.map((item) => {
          return (
            <Taps
              style={{
                ...commonStyles,
                ...item,
                ...dimentions,
              }}
            />
          );
        })}
    </div>
  );
};

export default Layout;
