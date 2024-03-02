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

  useEffect(() => {
    let timer = setInterval(() => {
      devices();
    }, 60 * 1000);
    // return clearTimeout(timer);
  }, []);

  const devices = async () => {
    const newvalues = {
      sump: 0,
      moisture1: 0,
      moisture2: 0,
    };
    let sumpres = await getSump();
    console.log("sumpres", sumpres);
    if (sumpres.status === "SUCCESS") {
      newvalues.sump = sumpres.data.value;
    }
    let mresp1 = await moisture1();

    if (mresp1.status === "SUCCESS") {
      newvalues.moisture1 = mresp1.data.value;
    }
    let mresp2 = await moisture2();
    if (mresp2.status === "SUCCESS") {
      newvalues.moisture2 = mresp2.data.value;
    }
    setDeviceValues(newvalues);
  };

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
            {item.device_type === "Moisture_Sensor" && (
              <div
                className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 flex-col"
                key={item._id}
              >
                <>
                  <p className="font-semibold text-blue-900">Moisture Sensor</p>

                  <MoistureSensor
                    value={
                      item.device_id === "6002.1"
                        ? deviceValues?.moisture1
                        : deviceValues?.moisture2
                    }
                    status={flowstatus}
                  />
                  <span className="font-semibold ">{item.device_id}</span>
                </>
              </div>
            )}
            {item.device_type === "Sump_Monitor" && (
              <div
                className="bg-white w-1/3 flex items-center justify-center rounded-md m-2 flex-col"
                key={item._id}
              >
                <>
                  <p className="font-semibold text-blue-900">Sump Monitor</p>

                  <WaterLevel value={deviceValues.sump} status={flowstatus} />
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
