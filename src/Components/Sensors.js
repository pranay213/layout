import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import "../Anim.css";
import WaterLevel from "./WaterLevel";
import MoistureSensor from "./MoistureSensor";
import { getSump, moisture1, moisture2 } from "../api";

const Sensors = (props) => {
  const { closeFn } = props;
  const { devicesList } = useContext(UserContext);
  //   const [valveState, setValveState] = useState(false);
  //   const [motorState, setmotorState] = useState(false);
  const [deviceValues, setDeviceValues] = useState({
    sump: 0,
    moisture1: 0,
    moisture2: 0,
  });
  const { flowstatus } = useContext(UserContext);

  //   useEffect(() => {
  //     console.log({ deviceValues });
  //   }, [deviceValues]);
  return (
    <>
      <div className="absolute right-5 top-[20%] bg-blue-400 px-3 py-1 rounded-md z-[99999]">
        <span className="text-white  font-bold" onClick={closeFn}>
          X
        </span>
      </div>

      <div className="w-full flex  items-center justify-evenly flex-wrap z-[500]">
        {devicesList.map((item) => (
          <React.Fragment key={item._id}>
            {/* {console.log("item", item)} */}
            {item?.devicetemplate_id?.name.includes("Moisture") && (
              <div
                className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 flex-col"
                key={item._id}
              >
                <>
                  <p className="font-semibold text-blue-900">Moisture Sensor</p>

                  <MoistureSensor
                    value={item?.get_value?.toFixed(2) || 0}
                    status={flowstatus}
                  />
                  <span className="font-semibold ">{item.device_id}</span>
                </>
              </div>
            )}
            {item?.devicetemplate_id?.name.includes("Sump") && (
              <div
                className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 flex-col"
                key={item._id}
              >
                <>
                  <p className="font-semibold text-blue-900">Sump Monitor</p>

                  <WaterLevel
                    value={item?.get_value?.toFixed(2) || 0}
                    status={flowstatus}
                  />
                  <span className="font-semibold ">{item.device_id}</span>
                </>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Sensors;
