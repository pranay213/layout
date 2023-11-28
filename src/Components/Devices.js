import React, { useContext, useEffect, useState } from "react";
import Valve from "../svg/Valve";
import Motor from "./Motor";
import MotorNew from "../svg/MotorNew";
import { UserContext } from "../context";
import "../Anim.css";

const Devices = (props) => {
  const { closeFn, showV } = props;
  const { data, devicesList } = useContext(UserContext);
  const [valveState, setValveState] = useState(false);
  const [motorState, setmotorState] = useState(false);

  // useEffect(() => {
  //   if (data?.msg === "open") {
  //     setValveState(true);
  //     setTimeout(() => {
  //       setmotorState(true);
  //     }, 5000);
  //   } else if (data?.msg === "close") {
  //     setmotorState(false);
  //     setTimeout(() => {
  //       setValveState(false);
  //     }, 5000);
  //   }
  // }, [data]);

  return (
    <>
      <div className="absolute right-5 top-5 bg-zinc-700 px-3 py-1 rounded-md">
        <span className="text-white" onClick={closeFn}>
          X
        </span>
      </div>

      <div className="w-full flex  items-center justify-evenly flex-wrap ">
        {devicesList.map((item) => (
          <div
            className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 p-4 flex-col"
            key={item._id}
          >
            {item.device_type === "Valve" && (
              <>
                <p className="font-semibold text-blue-900">Valve</p>
                <Valve
                  key={item._id}
                  className={`w-[40px] h-[40px] -rotate-90 ${
                    item.status === "open" ? "valveon" : "fill-[#000]"
                  }`}
                  // newClass="animation-spin"
                  width={100}
                  height={100}
                />
                <span className="font-semibold ">{item.device_id}</span>
              </>
            )}
            {item.device_type === "Motor_Control" && (
              <div className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 px-4 flex-col">
                <>
                  <p className="font-semibold text-blue-900">Motor</p>
                  <MotorNew
                    className={`w-[40px] h-[40px]  ${
                      item.status === "open"
                        ? " fill-[#D15478] animate-pulse"
                        : "fill-[#000]"
                    } `}
                    width={100}
                    height={100}
                  />
                </>
                <span className="font-semibold ">{item.device_id}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Devices;
