import React, { useContext, useEffect, useState } from "react";
import Valve from "../svg/Valve";
import Motor from "./Motor";
import MotorNew from "../svg/MotorNew";
import { UserContext } from "../context";
import "../Anim.css";
import WaterLevel from "./WaterLevel";
import MoistureSensor from "./MoistureSensor";
import InfoIcon from "./InfoIcon";
import { toast } from "react-toastify";

const Devices = (props) => {
  const { closeFn, showV } = props;
  const { data, devicesList } = useContext(UserContext);
  const [valveState, setValveState] = useState(false);
  const [motorState, setmotorState] = useState(false);

  const showToastFn = (error) => {
    toast.error(error, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "foo-bar",
    });
  };

  return (
    <>
      <div className="absolute right-5 top-[20%] bg-red-400 px-3 py-1 rounded-md z-[8000]">
        <span className="text-white z-[8000] font-bold" onClick={closeFn}>
          X
        </span>
      </div>

      <div className="w-full flex  items-center justify-evenly flex-wrap z-[500] mt-[20%] ">
        {devicesList.map((item) => (
          <React.Fragment key={item._id}>
            {item?.devicetemplate_id?.name.includes("Valve") && (
              <div
                className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 flex-col"
                key={item._id}
              >
                <>
                  <div className="flex ">
                    <p className="font-semibold text-blue-900 flex items-center text-center ml-[20%]">
                      Valve
                    </p>
                    {item?.response_status === "Error" && (
                      <button
                        className=" relative top-5 -right-[40%]"
                        onClick={() => showToastFn(item.response_error)}
                      >
                        <InfoIcon fill="#f00" />
                      </button>
                    )}
                  </div>
                  <Valve
                    key={item._id}
                    className={`w-[40px] h-[40px] -rotate-90 ${
                      item?.set_value == "SET" ? "valveon" : "fill-[#000]"
                    }`}
                    // newClass="animation-spin"
                    width={100}
                    height={100}
                  />
                  <span className="font-semibold ">{item.device_id}</span>
                </>
              </div>
            )}
            {item?.devicetemplate_id?.name.includes("Motor") && (
              <div
                className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 px-4 flex-col"
                key={item._id}
              >
                <>
                  <p className="font-semibold text-blue-900">Motor</p>
                  <MotorNew
                    className={`w-[40px] h-[40px]  ${
                      item?.set_value === "SET"
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
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Devices;
