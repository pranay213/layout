import React, { useContext, useEffect, useState } from "react";
import Valve from "../svg/Valve";
import Motor from "./Motor";
import MotorNew from "../svg/MotorNew";
import { UserContext } from "../context";
import "../Anim.css";
import GearIcon from "./GearIcon";

const StatusScreen = (props) => {
  const { closeFn, showV } = props;
  const { data, devicesList, gatewayStatus, flowstatus } =
    useContext(UserContext);
  const [valveState, setValveState] = useState(false);
  const [motorState, setmotorState] = useState(false);
  const { macId } = useContext(UserContext);

  return (
    <>
      <div className="w-4/5 flex flex-col  items-center justify-evenly flex-wrap bg-white py-14 rounded-lg absolute z-[10000]">
        <div className="absolute left-[1%] top-[1%] bg-zinc-700 px-3 py-1 rounded-md w-10 h-10 flex items-center">
          <span className="text-white" onClick={closeFn}>
            X
          </span>
        </div>
        <GearIcon
          className={`absolute top-[1%] w-[35px] h-[35px] right-[1%] 
        ${flowstatus ? " stroke-green-700 animate-spin" : " stroke-red-800"}`}
        />
        <div className="-mt-10">
          <p className=" text-xl  text-blue-600 font-bold my-2 ">Gateway id</p>
          <p>{macId}</p>

          <p className=" text-xl my-2   text-blue-600 font-bold">Status</p>
          <p>
            {gatewayStatus ? (
              <span className="text-green-800 font-bold ">Connected</span>
            ) : (
              <span className="text-red-800 font-bold ">Disconnected</span>
            )}
          </p>
          <p className=" text-xl my-2 text-blue-600 font-bold ">FLow Status</p>
          <p>
            {flowstatus ? (
              <span className="text-green-800 font-bold ">Running</span>
            ) : (
              <span className="text-red-800 font-bold ">Not Running</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default StatusScreen;
