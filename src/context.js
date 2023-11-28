import React, { createContext, useEffect, useState } from "react";
import Toastify from "./Components/Toastity";
import { toast } from "react-toastify";
import { allDevices } from "./api";

const UserContext = createContext({});
const UsercontextProvider = ({ children }) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const [data, setData] = useState();
  const [devicesList, setDevicesList] = useState([]);
  const [userid, setUserId] = useState(queryParameters.get("userid"));
  const [lists] = useState(["Valve", "Motor_Control"]);
  const [gatewayid, setGatewayId] = useState(queryParameters.get("gatewayid"));

  useEffect(() => {
    if (userid) {
      const ws = new WebSocket(`ws://192.236.161.98:8080/${userid}`);
      // // const ws = new WebSocket(`ws://localhost:443`);

      ws.addEventListener("open", () => {
        console.log("We are connected");
        // ws.close();
      });
      ws.onmessage = function (e) {
        var server_message = e.data;
        console.log(server_message);
        // document.write(JSON.stringify(server_message));

        // document.write({ msg: "newtest" });

        setData(JSON.parse(server_message));
        // document.getElementById("ph-value").innerHTML = server_message;
      };
      ws.onclose = function (e) {
        console.log("connection closed", e);
        ws.send("reconnect again");
      };
    }
  }, [userid]);

  useEffect(() => {
    if (data?.flow) {
      toast.success(data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (data?.msg) {
      toast.success(`${data?.device_id} is  ${data.msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (data?.msg === "") {
      toast.info("flow is not running");
    }
    devices(gatewayid);
  }, [data, userid, gatewayid]);

  async function devices(gatewayid) {
    if (gatewayid) {
      let resp = await allDevices(gatewayid);
      console.log("respo", resp);
      // document.write(JSON.stringify(resp.status));
      if (resp.status === "SUCCESS") {
        if (resp.data?.length > 0) {
          let newdevices = resp.data
            .filter((item) => {
              if (lists.includes(item.device_type)) {
                return item;
              }
            })
            .map(({ device_id, status, device_type, _id }) => {
              return { device_id, status, device_type, _id };
            });
          // document.write(JSON.stringify(newdevices));
          setDevicesList(newdevices);
        }
      }
    }
  }

  useEffect(() => {
    console.log("devicesList", devicesList);
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
      }}
    >
      <Toastify />
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UsercontextProvider };
