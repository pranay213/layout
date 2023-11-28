import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import Loader from "./Components/Loader";
import LoaderPage from "./Components/LoaderPage";
import { UserContext, UsercontextProvider } from "./context";
import { allDevices } from "./api";
// import Layout from "./Components/Layout";
const Layout = lazy(() => import("./Components/Layout"));

const App = () => {
  // const socket = io();
  const {
    setData,
    devicesList,
    setDevicesList,
    gatewayid,
    setGatewayId,
    userid,
    setUserId,
  } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const [lists] = useState(["valve", "Motor_Control"]);

  // document.write("userid", userid, "gatewayid", gatewayid);

  // let devices = async (gatewayid) => {
  //   let resp = await allDevices(gatewayid);
  //   console.log("respo", resp);
  //   // document.write(JSON.stringify(resp.status));
  //   if (resp.status === "SUCCESS") {
  //     if (resp.data?.length > 0) {
  //       let newdevices = resp.data.filter((item) => {
  //         if (lists.includes(item.device_type)) return item;
  //       });
  //       // document.write(JSON.stringify(newdevices));
  //       setDevicesList(newdevices);
  //     }
  //   }
  // };

  return (
    <>
      {loading && (
        <>
          <LoaderPage />
        </>
      )}
      <Suspense>
        <Layout
          setLoading={setLoading}
          loading={loading}
          gatewayid={gatewayid}
        />
      </Suspense>
    </>
  );
};

const LayoutView = () => {
  return (
    <UsercontextProvider>
      <App />
    </UsercontextProvider>
  );
};

export default LayoutView;
