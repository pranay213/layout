import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import Loader from "./Components/Loader";
import LoaderPage from "./Components/LoaderPage";
import { UserContext, UsercontextProvider } from "./context";
import { allDevices } from "./api";
// import Layout from "./Components/Layout";
const Layout = lazy(() => import("./Components/Layout"));
const Layout2 = lazy(() => import("./Components/Layout"));

const App = () => {
  // const socket = io();
  const { gatewayid } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const [lists] = useState(["valve", "Motor_Control"]);

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
