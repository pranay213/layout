import React, { createContext, useEffect, useState } from "react";
import Toastify from "./Components/Toastity";
import { toast } from "react-toastify";
import { BaseUrl2, allDevices, flowStatus, gateWays } from "./api";
import { io } from "socket.io-client";

const UserContext = createContext({});
const UsercontextProvider = ({ children }) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const [data, setData] = useState();
  const [devicesList, setDevicesList] = useState([]);
  const [userid, setUserId] = useState(queryParameters.get("userid"));
  const [isWsConnected, setIsWsConnected] = useState(false);
  const [events, setEvents] = useState(null);

  const wsUrl = BaseUrl2 ? BaseUrl2.slice(0, -5) : undefined;

  // console.log("wsUrl", wsUrl);
  const socket = io(wsUrl, { transports: ["websocket"] });

  const SOCKET_REQUEST_CONNECT = "SOCKET_REQUEST_CONNECT";
  const SOCKET_REQUEST_LOGOUT = "SOCKET_REQUEST_LOGOUT";
  // socket from server
  const SOCKET_REQUEST = "socket_request";
  const SOCKET_EVENT = "socket_event";

  useEffect(() => {
    socket.on("disconnect", (reason) => {
      console.table(`Disconnect error reason: ${reason}`);
      setIsWsConnected(false);
      // dispatch(webSocketDisconnected());
      // createToast(`Websocket disconnected, Reason: ${reason}`, { type: 'warning', position: 'top-center', autoClose: 1000 });
    });
    socket.on("connect", () => {
      // console.log("connected");
      sendConnectRequest();
    });
    // handle events from server
    socket.on("socket_event", (data) => {
      // console.log("socket event data ", data);

      // alert(JSON.stringify(data));
      // onSocketEvent(data);/
      if (data.name === "CONNECT_SUCCESS") {
        setIsWsConnected(true);
      } else {
        setEvents(data);
      }
    });
  }, []);

  function sendConnectRequest() {
    // if (!isWsConnected)
    socket.emit(SOCKET_REQUEST, {
      name: SOCKET_REQUEST_CONNECT,
      token: token,
    });
  }
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
  const [flowstatus, setFlowStatus] = useState(true);
  const [primarydevices] = useState([6001.2, 6002.1, 6003.1]);

  async function devices() {
    if (gatewayid) {
      let count = 0;
      let resp = await allDevices(gatewayid, token);
      if (resp?.success) {
        setDevicesList(resp.data);
      }
    }
  }

  const gatewayStatusFn = async () => {
    let res = await flowStatus(gatewayid, token);
    console.log("res----", res);
    if (res?.success) {
      setGatewayStatus(res?.data?.is_connected);
      setFlowStatus(res?.data?.flow);
    }
  };

  const toastFn = (new_event) => {
    let event_data = new_event.data;
    let status = event_data?.got_from_alt
      ? "warningToast"
      : event_data?.response_status === "Success"
      ? "successToast"
      : "errorToast";
    if (new_event?.message) {
      if (status === "successToast") {
        toast.success(new_event?.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      if (status === "warningToast") {
        toast.warn(new_event?.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (status === "errorToast") {
        toast.error(new_event?.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  useEffect(() => {
    // getwaysData();
    devices();
    gatewayStatusFn();
  }, []);

  useEffect(() => {
    // console.log("events", events);
    if (
      events?.name === "GATEWAY_MODIFIED" ||
      events?.name === "DEVICE_MODIFIED"
    ) {
      toastFn(events);
      devices();
      gatewayStatusFn();
    }
  }, [events]);

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
        isWsConnected,
        setIsWsConnected,
        events,
        setEvents,
      }}
    >
      <Toastify />
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UsercontextProvider };
