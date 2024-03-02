import React, { useEffect, useState } from "react";
// import Thermometer from "react-thermometer-component";
// import Thermo from "react-thermo";
// import "./Moisture.scss";

// const MoistureSensor = () => {
//   return (
//     <>
//       <Thermometer
//         theme="dark"
//         value="50"
//         max="100"
//         steps="3"
//         format="%"
//         size="small"
//         height="100"
//         reverseGradient={true}
//       />
//       {/* <Thermo
//         min={0}
//         max={100}
//         temperature={100}
//         lowTemperatureColor={"#f00"}
//         mediumTemperatureColor={"#f0f"}
//         highTemperatureColor={"#008631"}
//         mercuryPipeColor="#00f"
//         zones={[49, 100]}
//         glassColor="#c1c1c1"
//       /> */}
//     </>
//   );
// };

// export default MoistureSensor;
import "./Moisture.scss";

// class Thermometer extends React.Component {
//   constructor(props) {
//     super(props);

//     state = {
//       theme: () =>
//         props.theme === "light" || props.theme === "dark"
//           ? props.theme
//           : "light",
//       value: props.value || 100, //default 0
//       max: props.max || 100, //default 100
//       steps: props.steps || 4, //default 4
//       format: props.format || "",
//       size: () =>
//         props.size === "small" ||
//         props.size === "normal" ||
//         props.size === "large"
//           ? props.size
//           : "normal",
//       height: props.height || 200, //default 200
//       valstr: () => state.format + state.value,
//       percent: () => (state.value / state.max) * 100,
//       intervals: [],
//     };

//     for (let step = 0; step <= state.steps; step++) {
//       let val = ((state.max / state.steps) * step).toFixed(2);
//       let percent = (val / state.max) * 100;
//       let interval = { percent: percent, label: state.format + val };
//       state.intervals.push(interval);
//     }
//   }

//   render() {
//     const theme = `thermometer--theme-dark`;
//     const size = `thermometer--small`;
//     const height = { height: 120 };
//     const heightPercent = { height: `${state.percent()}%` };
//     const heightBgColor = { height: `calc(${state.height}px - 57px)` };
//     const valstr = state.valstr();
//     const stepIntervals = state.intervals.map((step, i) => {
//       return (
//         <li key={i} style={{ bottom: `calc(${step.percent}% - 1px)` }}>
//           {step.label}
//         </li>
//       );
//     });

//     return (
//       <div style={height} className={`thermometer ${size} ${theme}`}>
//         <div className="thermometer__draw-a"></div>
//         <div className="thermometer__draw-b"></div>
//         <div className="thermometer__meter">
//           {/* <ul className="thermometer__statistics">{stepIntervals}</ul> */}
//           <div style={heightPercent} className="thermometer__mercury">
//             <div className="thermometer__percent-current">{valstr}</div>
//             <div className="thermometer__mask">
//               <div className="bg-[#2196F3]" style={heightBgColor}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const MoistureSensor = (props) => {
  console.log("prps", props);

  const [liquidState, setLiquidState] = useState();
  const percent = () => (props.value / max) * 100;
  const valstrFn = () => props.value;

  const max = 100;
  const theme = `thermometer--theme-dark`;
  const size = `thermometer--small`;
  const height = { height: 120 };
  const heightPercent = { height: `${percent()}%` };
  const heightBgColor = { height: `calc(120px - 57px)` };
  const valstr = valstrFn();

  //   const stepIntervals = state.intervals.map((step, i) => {
  //     return (
  //       <li key={i} style={{ bottom: `calc(${step.percent}% - 1px)` }}>
  //         {step.label}
  //       </li>
  //     );
  //   });

  //       percent: () => (state.value / state.max) * 100,

  useEffect(() => {
    if (valstr < 50) {
      setLiquidState("low");
    } else if (valstr === 50) {
      setLiquidState("mid");
    } else if (valstr > 50) {
      setLiquidState("full");
    }
  }, [valstr]);
  useEffect(() => {}, []);
  return (
    <div style={height} className={`thermometer ${size} ${theme}`}>
      <div className="thermometer__draw-a"></div>
      <div
        className={`thermometer__draw-${liquidState} ${
          props.status && "animate-pulse"
        }`}
      ></div>
      <div className="thermometer__meter">
        {/* <ul className="thermometer__statistics">{stepIntervals}</ul> */}
        <div style={heightPercent} className="thermometer__mercury">
          <div className="thermometer__percent-current">{valstr}%</div>
          <div className="thermometer__mask">
            <div
              className={`fillcol-${liquidState} ${
                props.status && "animate-pulse"
              }`}
              style={heightBgColor}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoistureSensor;
