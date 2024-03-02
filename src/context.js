import React, { createContext, useEffect, useState } from "react";
import Toastify from "./Components/Toastity";
import { toast } from "react-toastify";
import { allDevices, gateWays } from "./api";

const UserContext = createContext({});
const UsercontextProvider = ({ children }) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const [data, setData] = useState();
  const [devicesList, setDevicesList] = useState([]);
  const [userid, setUserId] = useState(queryParameters.get("userid"));
  const [lists] = useState([
    "Valve",
    "Motor_Control",
    "Moisture_Sensor",
    "Sump_Monitor",
  ]);
  const [gatewayid, setGatewayId] = useState(queryParameters.get("gatewayid"));
  const [macId, setMacId] = useState(queryParameters.get("macId"));

  const [token, setToken] = useState(queryParameters.get("jwt-token"));
  const [gatewayStatus, setGatewayStatus] = useState(false);
  const [flowstatus, setFlowStatus] = useState(false);
  const [primarydevices] = useState([6001.2, 6002.1, 6003.1]);

  // useEffect(() => {
  //   if (userid) {
  //     const ws = new WebSocket(`ws://192.236.161.98:8081/${userid}`);
  //     // // const ws = new WebSocket(`ws://localhost:443`);

  //     ws.addEventListener("open", () => {
  //       console.log("We are connected");
  //       // ws.close();
  //     });
  //     ws.onmessage = function (e) {
  //       var server_message = e.data;
  //       console.log(server_message);
  //       // document.write(JSON.stringify(server_message));

  //       // document.write({ msg: "newtest" });

  //       setData(JSON.parse(server_message));
  //       // document.getElementById("ph-value").innerHTML = server_message;
  //     };
  //     ws.onclose = function (e) {
  //       console.log("connection closed", e);
  //       ws.send("reconnect again");
  //     };
  //   }
  // }, [userid]);

  // useEffect(() => {
  //   if (data?.flow) {
  //     toast.info(data.msg);
  //   } else if (data?.msg === "Gateway is disconnected") {
  //     // toast.info("Gateway is disconnected");
  //   } else if (typeof data?.msg === "number") {
  //     if (data?.device_id === 6002.1) {
  //       toast.info(`Moisture Sensor-1 value is ${data.msg}`);
  //     }
  //     if (data?.device_id === 6003.1) {
  //       toast.info(`Moisture Sensor-2 value is ${data.msg}`);
  //     }
  //     if (data?.device_id === 6001.2) {
  //       toast.info(`Sump value is ${data.msg}`);
  //     }
  //   } else if (data?.msg) {
  //     if (data.msg === "open" || data.msg === "close") {
  //       toast.info(`${data?.device_id} is  ${data.msg}`);
  //     } else {
  //       toast.info(`${data?.device_id} -  ${data.msg}`);
  //     }
  //   } else if (data?.msg === "") {
  //     toast.info("flow is not running");
  //   }
  //   devices(gatewayid);
  // }, [data, userid, gatewayid]);

  async function devices() {
    if (gatewayid) {
      console.log("gateway api", gatewayid);
      let count = 0;
      let resp = await allDevices(gatewayid, token);

      setDevicesList(resp.data);
    }
  }

  const getwaysData = async () => {
    if (userid) {
      console.log("gateway status is calling");
      let res = await gateWays(userid);
      if (res.status === "SUCCESS") {
        res.data.filter((item) => {
          if (item.gateway_id === gatewayid && item.active)
            setGatewayStatus(true);
          else setGatewayStatus(false);
        });
      }
    }
  };

  useEffect(() => {
    // getwaysData();
    devices();
  }, []);

  useEffect(() => {
    let Motor_device = devicesList.find((item) =>
      item?.devicetemplate_id?.name.includes("Motor")
    );
    if (Motor_device?.set_value === "SET") {
      setFlowStatus(true);
    } else setFlowStatus(false);
  }, [devicesList]);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        devicesList,
        setDevicesList,
        gatewayid,
        setGatewayId,
        userid,
        setUserId,
        gatewayStatus,
        setGatewayStatus,
        flowstatus,
        setFlowStatus,
        macId,
        setMacId,
      }}
    >
      <Toastify />
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UsercontextProvider };
