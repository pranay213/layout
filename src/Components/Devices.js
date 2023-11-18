import React, { useContext } from "react";
import Valve from "../svg/Valve";
import Motor from "./Motor";
import MotorNew from "../svg/MotorNew";
import { UserContext } from "../context";
import "../Anim.css";

const Devices = (props) => {
  const { closeFn, showV } = props;
  const { data } = useContext(UserContext);
  return (
    <>
      <div className="absolute right-5 top-5 bg-zinc-700 px-3 py-1 rounded-md">
        <span className="text-white" onClick={closeFn}>
          X
        </span>
      </div>
      <div className="w-full h-20 flex flex-row items-center justify-evenly ">
        <div className="w-1/3  bg-white px-4 rounded-2xl flex flex-col items-center justify-center py-8">
          <span className="font-semibold text-blue-900">VALVE 1</span>
          <Valve
            className={`w-[40px] h-[40px] -rotate-90 ${
              data?.msg === "open" ? "valveon" : "fill-[#000]"
            }`}
            // newClass="animation-spin"
            width={40}
            height={40}
          />
          <span className="font-semibold ">6004.1</span>
        </div>
        <div className="w-1/3  bg-white px-4 rounded-2xl flex flex-col items-center justify-center py-8">
          <span className="font-semibold text-blue-900">VALVE 2</span>
          <Valve
            className={`w-[40px] h-[40px] -rotate-90 ${
              data?.msg === "open" ? "valveon" : "fill-[#000]"
            }`}
            width={40}
            height={40}
          />
          <span className="font-semibold ">6005.1</span>
        </div>
      </div>
      <div className="w-1/3  bg-white px-4 rounded-2xl flex flex-col items-center justify-center py-8 my-20">
        <span className="font-semibold text-blue-900 my-2">MOTOR 1</span>
        {/* <Motor fill="black" width={50} height={50} /> */}
        <MotorNew
          className={`w-full ${
            data?.msg === "open"
              ? " fill-[#D15478] animate-pulse"
              : "fill-[#000]"
          } `}
        />
        <span className="font-semibold my-1 ">6006.1</span>
      </div>
    </>
  );
};

export default Devices;
