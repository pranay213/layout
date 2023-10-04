import React, { useEffect, useState } from "react";
import layout from "../images/layout3_new2.webp";
import "./style.scss";
import Valve from "../svg/Valve";
import Motor from "./Motor";
import "../Anim.css";
import DisplayMsg from "./DisplayMsg";
import Line from "./Line";

import { v4 as uuidV4 } from "uuid";
import DripLine from "./DripLine";
import Eclipse from "./Eclipse";
import CustomShape from "./CustomShape";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";
import Circle from "./Circle";
import Rectangle from "./Rectangle";
import PartFour from "./PartFour";
import Map from "./Map";
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const Layout = (props) => {
  const { setLoading, loading } = props;
  console.log("setLoading", setLoading);
  const commonStyles = {
    position: "absolute",
    borderRadius: "50%",
  };
  let valveCommonStyles = {
    height: "1.35%",
    width: "1.35%",
    position: "absolute",
    zIndex: 100,
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
      bottom: "24.2%",
    },
    {
      id: 22,
      left: "59.6%",
      bottom: "24.2%",
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
      bottom: "19.8%",
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
      bottom: "19%",
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
      bottom: "18.5%",
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
      bottom: "18%",
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
      bottom: "17.6%",
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
      bottom: "17.2%",
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
      bottom: "16%",
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
      bottom: "15%",
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
      bottom: "17.9%",
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
      bottom: "18.1%",
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
      bottom: "20.5%",
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
      bottom: "21.7%",
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
      bottom: "23%",
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
      bottom: "24.8%",
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
      bottom: "26%",
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
      bottom: "27.5%",
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
      bottom: "28.8%",
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
      bottom: "30%",
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
      bottom: "31%",
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
      bottom: "32.5%",
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
      bottom: "33.8%",
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
      bottom: "35.2%",
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
      bottom: "36.6%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    {
      id: 48,
      left: "57.5%",
      bottom: "43.2%",
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
      bottom: "40.6%",
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
      bottom: "42%",
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
      bottom: "45.3%",
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
      bottom: "46.3%",
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
      bottom: "47.7%",
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
      bottom: "48.8%",
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
      bottom: "50%",
      fill1: "#B72E1C",
      fill2: "#B72E1C",
      fill3: "#ddd",
      height: 2,
      width: 2,
      className: "rotate",
    },
    // {
    //   id: 55,
    //   left: "56.8%",
    //   bottom: "52.7%",
    //   fill1: "#B72E1C",
    //   fill2: "#B72E1C",
    //   fill3: "#ddd",
    //   height: 2,
    //   width: 2,
    //   className: "rotate",
    // },
    {
      id: 56,
      left: "56.2%",
      bottom: "54%",
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
      bottom: "55.2%",
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
      bottom: "56.8%",
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
      bottom: "58.1%",
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
      bottom: "59.5%",
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
      bottom: "60.8%",
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
      bottom: "62%",
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
      bottom: "63.2%",
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
      bottom: "30%",
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
      bottom: "32%",
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
      msgDisp: false,
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
    {
      id: 2,
      width: "5%",
      transform: "rotate(-54deg)",
      top: "64.5%",
      left: "25.5%",
      delay: 1,
    },
    {
      id: 3,
      width: "3%",
      transform: "rotate(53deg)",
      top: "65.2%",
      left: "24.2%",
      delay: 1.5,
    },
    {
      id: 4,
      width: "5.8%",
      transform: "rotate(-68deg)",
      top: "66.2%",
      left: "20.9%",
      delay: 2,
    },
    {
      id: 5,
      width: "5.7%",
      transform: "rotate(-82deg)",
      top: "70.3%",
      left: "19.7%",
      delay: 2.5,
    },
    {
      id: 6,
      width: "5.5%",
      transform: "rotate(-87deg)",
      top: "74%",
      left: "19.2%",
      delay: 3,
    },
    {
      id: 7,
      width: "5.5%",
      transform: "rotate(-98deg)",
      top: "78%",
      left: "19.4%",
      delay: 3.5,
    },
    {
      id: 8,
      width: "5.5%",
      transform: "rotate(-105deg)",
      top: "81.7%",
      left: "20.3%",
      delay: 4,
    },
    {
      id: 9,
      width: "8.7%",
      transform: "rotate(-116deg)",
      top: "86.6%",
      left: "21.3%",
      delay: 4.5,
    },
    {
      id: 10,
      width: "5%",
      transform: "rotate(-196deg)",
      top: "89%",
      left: "27.3%",
      delay: 5,
    },
    {
      id: 11,
      width: "5.4%",
      transform: "rotate(52deg)",
      top: "86.9%",
      left: "28%",
      delay: 5.5,
    },
    {
      id: 12,
      width: "13%",
      transform: "rotate(155deg)",
      top: "83.3%",
      left: "28.4%",
      delay: 6,
    },
    {
      id: 13,
      width: "6%",
      transform: "rotate(37deg)",
      top: "79.9%",
      left: "35.1%",
      delay: 6.5,
    },
    {
      id: 14,
      width: "13.7%",
      transform: "rotate(120deg)",
      top: "74.2%",
      left: "32.5%",
      delay: 7,
    },
    {
      id: 15,
      width: "3%",
      transform: "rotate(19deg)",
      top: "69.3%",
      left: "39.9%",
      delay: 7.5,
    },
    {
      id: 16,
      width: "4%",
      transform: "rotate(86deg)",
      top: "67.5%",
      left: "37.8%",
      delay: 8,
    },
    {
      id: 16,
      width: "2.4%",
      transform: "rotate(51deg)",
      top: "65.5%",
      left: "37.8%",
      delay: 8,
    },
  ]);
  const [dripData2, setDripData2] = useState([
    {
      id: 110,
      left: "49%",
      top: "83.4%",
      transform: "rotate(19deg)",
      width: "12.2%",
    },
    {
      id: 112,
      left: "60%",
      top: "77.9%",
      transform: "rotate(14deg)",
      width: "4%",
    },
    {
      id: 113,
      left: "55.3%",
      top: "78.5%",
      transform: "rotate(14deg)",
      width: "10%",
    },
    {
      id: 114,
      left: "52%",
      top: "78.9%",
      transform: "rotate(15deg)",
      width: "12%",
    },
    {
      id: 115,
      left: "49.4%",
      top: "79.1%",
      transform: "rotate(-65deg)",
      width: "4.3%",
    },
    {
      id: 116,
      left: "61.7%",
      top: "82%",
      transform: "rotate(-59deg)",
      width: "3%",
    },
    {
      id: 117,
      left: "62.2%",
      top: "80.9%",
      transform: "rotate(-346deg)",
      width: "2%",
    },
  ]);
  const [dripData3, setDripData3] = useState([
    {
      id: 3,
      width: "8.5%",
      transform: "rotate(24deg)",
      top: "78.5%",
      left: "67.5%",
    },
    {
      id: 4,
      width: "6.5%",
      transform: "rotate(49deg)",
      top: "75.4%",
      left: "62.5%",
    },
    {
      id: 5,
      width: "6.5%",
      transform: "rotate(66deg)",
      top: "71.4%",
      left: "59.2%",
    },
    {
      id: 6,
      width: "6.5%",
      transform: "rotate(88deg)",
      top: "67.1%",
      left: "58%",
    },
    {
      id: 7,
      width: "6.5%",
      transform: "rotate(101deg)",
      top: "62.4%",
      left: "58.5%",
    },
    {
      id: 8,
      width: "7%",
      transform: "rotate(92deg)",
      top: "57.6%",
      left: "58.9%",
    },
    {
      id: 8,
      width: "7%",
      transform: "rotate(88deg)",
      top: "52.6%",
      left: "58.9%",
    },
    {
      id: 9,
      width: "8%",
      transform: "rotate(82deg)",
      top: "47.6%",
      left: "58%",
    },
    {
      id: 9,
      width: "4%",
      transform: "rotate(88deg)",
      top: "43%",
      left: "59.2%",
    },
    {
      id: 10,
      width: "4%",
      transform: "rotate(132deg)",
      top: "40.5%",
      left: "60.6%",
    },
    {
      id: 11,
      width: "3%",
      transform: "rotate(153deg)",
      top: "39%",
      left: "63.6%",
    },
  ]);

  const [threeDrips, setThreeDrips] = useState([
    {
      id: 1,
      width: "0.5px",
      transform: "rotate(-10deg)",
      top: "38%",
      left: "70.6%",
      height: "42.8%",
    },
    {
      id: 2,
      width: "0.5px",
      transform: "rotate(-10deg)",
      top: "33.6%",
      left: "65.4%",
      height: "2.5%",
    },
    {
      id: 3,
      width: "0.5px",
      transform: "rotate(-10deg)",
      top: "83.0%",
      left: "77.6%",
      height: "13%",
    },
  ]);

  const [eclipseData, setEclipseData] = useState([
    {
      id: 1,
      width: "3.2%",
      height: "6%",
      left: "63.4%",
      top: "49.9%",
      transform: "rotate(-5deg)",
    },
    {
      id: 2,
      width: "3.2%",
      height: "5.5%",
      left: "65.9%",
      top: "63.3%",
      transform: "rotate(-12deg)",
    },
  ]);
  const [msgData, setMsgData] = useState([
    {
      id: 1,
    },
  ]);
  const [waterCol, setWaterCol] = useState("#416BDF");
  const [fillColor, setFillColor] = useState(0.5);
  const [circleData, setCircleData] = useState([
    { id: 1, width: "1.5%", height: "1.5%", top: "51%", left: "32.9%" },
    { id: 2, width: "3%", height: "3%", top: "49.9%", left: "40.65%" },
    { id: 3, width: "1.5%", height: "1.5%", top: "72%", left: "56%" },
  ]);
  const [rectangleData, setRectangleData] = useState([
    {
      id: 1,
      width: "1%",
      height: "1%",
      top: "43.5%",
      left: "63.5%",
      transform: "rotate(-9deg)",
    },
    {
      id: 2,
      width: "1%",
      height: "1%",
      top: "47.2%",
      left: "64.2%",
      transform: "rotate(-9deg)",
    },
    {
      id: 3,
      width: "1%",
      height: "1%",
      top: "57%",
      left: "65.4%",
      transform: "rotate(-9deg)",
    },
    {
      id: 4,
      width: "1%",
      height: "1%",
      top: "60.6%",
      left: "66%",
      transform: "rotate(-9deg)",
    },
    {
      id: 5,
      width: "1%",
      height: "1%",
      top: "70.4%",
      left: "68.22%",
      transform: "rotate(-9deg)",
    },
    {
      id: 6,
      width: "1%",
      height: "1%",
      top: "73.8%",
      left: "69%",
      transform: "rotate(-9deg)",
    },
  ]);

  // useEffect(() => {
  //   // const timer = setTimeout(() => {
  //   //   if (waterCol === "#006100") setWaterCol("#99C0E3");
  //   //   else {
  //   //     setWaterCol((prev) => "#006100");
  //   //   }
  //   //   return () => clearTimeout(timer);
  //   // }, 1000);
  //   // if (tapsState) {
  //   //   const timer = setTimeout(() => {
  //   //     if (tapColor === "#7FCDFF") setTapColor("#A82B02");
  //   //     else {
  //   //       setTapColor((prev) => "#7FCDFF");
  //   //     }
  //   //   }, 500);
  //   // }
  //   // return () => clearTimeout(timer);
  // }, [waterCol, valvesData, tapsState, tapColor]);
  var timer;
  const handlerFn = (event, id) => {
    clearTimeout(timer);

    if (event.detail === 1) {
      timer = setTimeout(() => {
        toggleMsg(id);
      }, 200);
    } else if (event.detail === 2) {
      toggleValve(id);
    }
  };

  const toggleValve = (id) => {
    let newValveData = valvesData.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    });
    console.log("newValveData ---", newValveData);
    // setValvesData((prev) => [...prev]);
    setValvesData((prev) => newValveData);
  };

  const toggleMsg = (id) => {
    let newValveData = valvesData.map((item) => {
      if (item.id === id) {
        item.msgDisp = !item.msgDisp;
      }
      return item;
    });
    setValvesData((prev) => newValveData);
  };

  // const ShowDisplayMsg = () => {};

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (fillColor < 1) {
  //       setFillColor((prev) => prev + 0.1);
  //     } else {
  //       setFillColor((prev) => 0);
  //     }
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [fillColor]);

  return (
    <div
      className="layout-container"
      style={{ display: loading && "none", marginTop: "15%" }}
    >
      {/* <Directions /> */}

      <div
        style={{
          width: "90%",
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          border: "10px solid tranparent",
          margin: "auto",
          marginTop: "33%",
          // backgroundColor: "rgba(0,255,0,0.5)",
          // backgroundImage:
          //   "url('https://media.istockphoto.com/id/1151367251/vector/seamless-texture-city-map-in-retro-style-outline-map.jpg?s=612x612&w=0&k=20&c=0EzK-SAxKD6tkZJGMjICcYenqTgL6SXc8LFGxMpHY3Y=')",
        }}
      >
        <img
          src={layout}
          style={{
            width: "100%",
            height: "100%",
            opacity: 1,
          }}
          alt="layout"
          onLoad={() => {
            setTimeout(() => {
              setLoading(false);
            }, 10000);
          }}
          // onResize={() => setLoading(true)}
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
              // fill={item.state ? waterCol : "#ff0000"}
              onClick={(event) => {
                handlerFn(event, item.id);
              }}
              className={item.state ? "valve-open" : "valve-close"}
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

      {dripData &&
        dripData.map((item) => {
          return <Line key={item.id} item={item} />;
        })}
      {dripData2 &&
        dripData2.map((item) => {
          return <Line key={item.id} item={item} />;
        })}
      {dripData3 &&
        dripData3.map((item) => {
          return <Line key={item.id} item={item} />;
        })}

      {threeDrips &&
        threeDrips.map((item) => {
          return <DripLine key={item.id} item={item} />;
        })}
      {/* <Line /> */}

      {eclipseData &&
        eclipseData.map((item) => {
          return <Eclipse item={item} />;
        })}
      <CustomShape
        style={{
          position: "absolute",
          width: "12%",
          height: "8%",
          top: "33.8%",
          left: "52.6%",
        }}
        className="dripping"
      />
      <PartOne
        style={{
          position: "absolute",
          width: "19%",
          height: "17%",
          top: "45.1%",
          left: "27.6%",
        }}
        className="dripping"
      />
      <PartTwo
        style={{
          position: "absolute",
          width: "13%",
          height: "5%",
          top: "81.1%",
          left: "62.8%",
        }}
        className="dripping"
      />
      <PartThree
        style={{
          position: "absolute",
          width: "18%",
          height: "13%",
          top: "84.5%",
          left: "60.9%",
        }}
        className="dripping"
      />
      <PartFour
        style={{
          position: "absolute",
          width: "5%",
          height: "10%",
          top: "65.5%",
          left: "56.4%",
        }}
        className="dripping"
      />

      {/* <Map
        style={{
          position: "absolute",
          width: "75%",
          height: "65%",
          top: "34%",
          left: "7%",
        }}
        // className="dripping"
      /> */}

      {circleData &&
        circleData.map((item) => {
          return (
            <Circle
              style={{
                position: "absolute",
                ...item,
              }}
              className="dripping"
            />
          );
        })}

      {rectangleData &&
        rectangleData.map((item) => {
          return (
            <Rectangle
              style={{
                position: "absolute",
                ...item,
              }}
              className="dripping"
            />
          );
        })}

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
      {tapsData &&
        tapsData.map((item) => {
          return (
            <Motor
              style={{
                ...commonStyles,
                ...item,
                // ...dimentions,
                // height: item.height ? item.height : 5,
                // width: item.width ? item.width : 3,
                height: 4,
                width: 4,
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
    </div>
  );
};

export default Layout;
