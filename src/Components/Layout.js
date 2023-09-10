import React, { useEffect, useState } from "react";
import layout from "../images/layout3.jpg";
import "./style.scss";
import Valve from "../svg/Valve";
import Taps from "./Taps";
import Motor from "./Motor";
import "../Anim.css";
import NewMotor from "./NewMotor";
import waterAnim from "../images/water.gif";
import DisplayMsg from "./DisplayMsg";
import Line from "./Line";

import { v4 as uuidV4 } from "uuid";
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const Layout = () => {
  const commonStyles = {
    position: "absolute",
    borderRadius: "50%",
  };
  let valveCommonStyles = {
    height: "1.35%",
    width: "1.35%",
    position: "absolute",
  };
  const [tapsState, setTapState] = useState(true);
  const [tapColor, setTapColor] = useState("#7FCDFF");
  const [tapsData, setTapData] = useState([
    {
      id: 1,
      left: "61.0%",
      bottom: "56.9%",
    },
    {
      id: 2,
      left: "62%",
      bottom: "53%",
    },
    {
      id: 3,
      left: "62.44%",
      bottom: "49.5%",
    },
    {
      id: 4,
      left: "62.64%",
      bottom: "45.6%",
    },
    {
      id: 5,
      left: "62.5%",
      bottom: "41.9%",
    },
    {
      id: 6,
      left: "69.2%",
      bottom: "40.9%",
    },
    {
      id: 7,
      left: "68.5%",
      bottom: "44.5%",
    },
    {
      id: 8,
      left: "67.5%",
      bottom: "48.4%",
    },
    {
      id: 9,
      left: "67.1%",
      bottom: "52.1%",
    },
    {
      id: 10,
      left: "66.1%",
      bottom: "55.95%",
    },
    {
      id: 11,
      left: "65.5%",
      bottom: "59.7%",
    },
    {
      id: 12,
      left: "44%",
      bottom: "52.7%",
    },
    {
      id: 13,
      left: "39.2%",
      bottom: "50.7%",
    },
    {
      id: 14,
      left: "35.2%",
      bottom: "51.7%",
    },
    {
      id: 15,
      left: "32.2%",
      bottom: "49.7%",
    },
    {
      id: 16,
      left: "30.2%",
      bottom: "46.2%",
    },
    {
      id: 17,
      left: "35.5%",
      bottom: "46.9%",
    },
    {
      id: 18,
      left: "40.5%",
      bottom: "45.5%",
    },
    {
      id: 19,
      left: "45.2%",
      bottom: "43.5%",
    },
    {
      id: 20,
      left: "44.6%",
      bottom: "48.2%",
    },
    {
      id: 21,
      left: "52.6%",
      bottom: "25.2%",
    },
    {
      id: 22,
      left: "59.6%",
      bottom: "25.2%",
    },
    {
      id: 23,
      left: "39.5%",
      bottom: "48.6%",
      fill1: "green",
      fill2: "green",
      fill3: "#ddd",
      className: "rotate",
    },
    {
      id: 24,
      left: "66.5%",
      bottom: "20.8%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      className: "rotate",
      height: 2,
      width: 2,
    },
    {
      id: 25,
      left: "68.5%",
      bottom: "20%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 26,
      left: "69.9%",
      bottom: "19.5%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 27,
      left: "71.7%",
      bottom: "19%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 28,
      left: "73.4%",
      bottom: "18.6%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 29,
      left: "75.2%",
      bottom: "18.2%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 30,
      left: "75.4%",
      bottom: "17%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 31,
      left: "75.6%",
      bottom: "16%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 32,
      left: "46.4%",
      bottom: "18.9%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 33,
      left: "47.6%",
      bottom: "20.1%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 34,
      left: "48.6%",
      bottom: "21.5%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 35,
      left: "49.5%",
      bottom: "22.7%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 36,
      left: "50.5%",
      bottom: "24%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 37,
      left: "51.6%",
      bottom: "25.8%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 38,
      left: "48.1%",
      bottom: "19.5%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 39,
      left: "52.4%",
      bottom: "27%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 40,
      left: "53.2%",
      bottom: "28.5%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 41,
      left: "53.9%",
      bottom: "29.8%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 42,
      left: "54.5%",
      bottom: "31%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 43,
      left: "55%",
      bottom: "32%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 44,
      left: "55.4%",
      bottom: "33.5%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 45,
      left: "55.9%",
      bottom: "34.8%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 46,
      left: "56.23%",
      bottom: "36.2%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 47,
      left: "56.7%",
      bottom: "37.6%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 48,
      left: "57.2%",
      bottom: "40.2%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 49,
      left: "57.5%",
      bottom: "41.6%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 50,
      left: "57.5%",
      bottom: "43%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 51,
      left: "57.5%",
      bottom: "46.3%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 52,
      left: "57.5%",
      bottom: "47.3%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 53,
      left: "57.5%",
      bottom: "48.7%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 53,
      left: "57.4%",
      bottom: "49.8%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 54,
      left: "57.4%",
      bottom: "51%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 55,
      left: "56.8%",
      bottom: "53.7%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 56,
      left: "56.2%",
      bottom: "55%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 57,
      left: "55.8%",
      bottom: "56.2%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 58,
      left: "55.4%",
      bottom: "57.8%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 59,
      left: "54.9%",
      bottom: "59.1%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 60,
      left: "54.1%",
      bottom: "60.5%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 61,
      left: "53.6%",
      bottom: "61.8%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 61,
      left: "52.8%",
      bottom: "63%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 62,
      left: "52.2%",
      bottom: "64.2%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 63,
      left: "55.6%",
      bottom: "31%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 64,
      left: "56.8%",
      bottom: "33%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
  ]);

  const [valvesData, setValvesData] = useState([
    {
      id: 1,
      top: " 54.1%",
      right: "41.2%",
      transform: "rotate(-180deg)",
      state: true,
      msgDisp: true,
    },
    {
      id: 2,
      top: "52.1%",
      right: "29.5%",
      transform: "rotate(-180deg)",
      state: false,
      msgDisp: false,
    },
    {
      id: 3,
      top: "60.5%",
      right: "28.9%",
      transform: "rotate(-180deg)",
      state: false,
      msgDisp: false,
    },
    {
      id: 4,
      top: "75.5%",
      right: "30.9%",
      transform: "rotate(-60deg)",
      state: false,
      msgDisp: false,
    },
    {
      id: 5,
      top: "71.8%",
      right: "40.4%",
      transform: "rotate(-27deg)",
      state: false,
      msgDisp: false,
    },
    {
      id: 6,
      top: "81.6%",
      right: "25.65%",
      transform: "rotate(-27deg)",
      state: false,
      msgDisp: false,
    },
    {
      id: 7,
      top: "86%",
      right: "21.12%",
      transform: "rotate()",
      state: false,
      msgDisp: false,
    },
    {
      id: 8,
      top: "52%",
      right: "54.12%",
      transform: "rotate()",
      state: false,
      msgDisp: false,
    },
    {
      id: 9,
      top: "54.8%",
      right: "55.5%",
      transform: "rotate(-40deg)",
      state: true,
      msgDisp: false,
    },
  ]);
  const [dimentions, setDimentions] = useState({
    height: 4,
    width: 4,
  });

  const [motorsData, setMotorsData] = useState([
    {
      id: 1,
      left: "61.6%",
      bottom: "35.9%",
    },
    {
      id: 2,
      left: "70.6%",
      bottom: "35.2%",
    },
    {
      id: 3,
      left: "61.9%",
      bottom: "30.1%",
    },
    {
      id: 4,
      left: "71.9%",
      bottom: "28.6%",
    },
    {
      id: 5,
      left: "66.9%",
      bottom: "24.8%",
    },
    {
      id: 6,
      left: "73.9%",
      bottom: "21.6%",
    },
  ]);
  const [motorDimentions, setMotorDimentions] = useState({
    height: 5,
    width: 5,
  });
  const [seconds, setSeconds] = useState(0);
  const [dripData, setDripData] = useState([
    // {
    //   id: 1,
    //   left: "49%",
    //   top: "82.2%",
    //   transform: "rotate(16deg)",
    //   width: "12.2%",
    // },
    // {
    //   id: 2,
    //   left: "60%",
    //   top: "76.8%",
    //   transform: "rotate(14deg)",
    //   width: "4%",
    // },
    // {
    //   id: 3,
    //   left: "55.3%",
    //   top: "77.5%",
    //   transform: "rotate(14deg)",
    //   width: "10%",
    // },
    // {
    //   id: 4,
    //   left: "52%",
    //   top: "77.8%",
    //   transform: "rotate(14deg)",
    //   width: "12%",
    // },
    {
      id: 3,
      width: "4%",
      transform: "rotate(-56deg)",
      top: "63.9%",
      left: "26.1%",
      delay: 0,
    },
    {
      id: 4,
      width: "3%",
      transform: "rotate(26deg)",
      top: "64.5%",
      left: "24.5%",
      delay: 5,
    },
    {
      id: 5,
      width: "5.8%",
      transform: "rotate(-69deg)",
      top: "66.2%",
      left: "20.9%",
      delay: 10,
    },
    {
      id: 6,
      width: "5.5%",
      transform: "rotate(-83deg)",
      top: "70%",
      left: "19.5%",
      delay: 15,
    },
    {
      id: 7,
      width: "5.5%",
      transform: "rotate(-87deg)",
      top: "74%",
      left: "19.2%",
      delay: 20,
    },
    {
      id: 8,
      width: "5.5%",
      transform: "rotate(-98deg)",
      top: "78%",
      left: "19.4%",
      delay: 25,
    },
    {
      id: 9,
      width: "5.5%",
      transform: "rotate(-108deg)",
      top: "81.7%",
      left: "20.5%",
      delay: 30,
    },
    {
      id: 9,
      width: "8%",
      transform: "rotate(-114deg)",
      top: "85.7%",
      left: "21.5%",
      delay: 35,
    },
    {
      id: 10,
      width: "5%",
      transform: "rotate(-196deg)",
      top: "87.9%",
      left: "26.9%",
      delay: 40,
    },
    {
      id: 11,
      width: "5%",
      transform: "rotate(50deg)",
      top: "85.9%",
      left: "27.9%",
      delay: 45,
    },
    {
      id: 12,
      width: "13%",
      transform: "rotate(155deg)",
      top: "82.4%",
      left: "27.9%",
      delay: 50,
    },
    {
      id: 13,
      width: "5%",
      transform: "rotate(42deg)",
      top: "78.9%",
      left: "35.1%",
      delay: 55,
    },
    {
      id: 14,
      width: "13.7%",
      transform: "rotate(120deg)",
      top: "73.2%",
      left: "32.5%",
      delay: 60,
    },
    {
      id: 15,
      width: "3%",
      transform: "rotate(17deg)",
      top: "68.5%",
      left: "39.5%",
      delay: 65,
    },
    {
      id: 16,
      width: "5%",
      transform: "rotate(79deg)",
      top: "66.5%",
      left: "36.8%",
      delay: 70,
    },
  ]);

  const [msgData, setMsgData] = useState([
    {
      id: 1,
    },
  ]);
  const [waterCol, setWaterCol] = useState("#416BDF");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (waterCol === "#006100") setWaterCol("#99C0E3");
      else {
        setWaterCol((prev) => "#006100");
      }
      return () => clearTimeout(timer);
    }, 1000);
    if (tapsState) {
      const timer = setTimeout(() => {
        if (tapColor === "#7FCDFF") setTapColor("#A82B02");
        else {
          setTapColor((prev) => "#7FCDFF");
        }
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [waterCol, valvesData, tapsState, tapColor]);

  const toggleValve = (id) => {
    valvesData.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
    });
    // setValvesData((prev) => [...newValveData]);
  };

  const toggleMsg = (id) => {
    valvesData.map((item) => {
      if (item.id === id) {
        item.msgDisp = !item.msgDisp;
      }
    });
  };

  const ShowDisplayMsg = () => {};

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

      {valvesData &&
        valvesData.map((item) => {
          return (
            <Valve
              key={uuidV4()}
              style={{
                ...valveCommonStyles,
                ...item,
                // ...dimentions,
              }}
              fill={item.state ? waterCol : "#ff0000"}
              onDoubleClick={() => {
                toggleValve(item.id);
              }}
              onClick={() => {
                toggleMsg(item.id);
              }}
            />
          );
        })}

      {/* {true && (
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
      )} */}
      {/* {msgData && msgData.length > 0 && (
        <DisplayMsg msgData={msgData} valvesData={valvesData} />
      )} */}
      {
        <DisplayMsg
          tapsData={tapsData}
          valvesData={valvesData}
          toggleMsg={toggleMsg}
        />
      }

      {tapsData &&
        tapsData.map((item) => {
          return (
            <Motor
              style={{
                ...commonStyles,
                ...item,
                // ...dimentions,
                height: item.height ? item.height : 3,
                width: item.width ? item.width : 3,
              }}
              // fill={tapsState ? tapColor : "#B62511"}
              // fill={"#B62511"}
              // fill2={"#B62511"}
              // fill3={"#ddd"}
              fill={item.fill1 ? item.fill1 : "#B62511"}
              fill2={item.fill2 ? item.fill2 : "#B62511"}
              fill3={item.fill3 ? item.fill3 : "#ddd"}
              // fill={item.fill1 ? item.fill1 : "#0000ff"}
              // fill2={item.fill2 ? item.fill2 : "#0000ff"}
              // fill3={item.fill3 ? item.fill3 : "#ddd"}
              className={valvesData[0].state ? "rotate" : ""}
              // className={item.className ? item.className : ""}
            />
          );
        })}
      {dripData &&
        dripData.map((item) => {
          return <Line key={item.id} item={item} />;
        })}
      <Line />

      {motorsData &&
        motorsData.map((item) => {
          return (
            <Motor
              key={uuidV4()}
              style={{
                ...commonStyles,
                ...item,
                ...motorDimentions,
              }}
              fill={"#00f"}
              fill2={"#00f"}
              fill3={"#ddd"}
              className="rotate"
              // fill={tapsState ? tapColor : "#B62511"}
            />
          );
        })}
    </div>
  );
};

export default Layout;
