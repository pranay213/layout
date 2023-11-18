// import "./App.css";
// // import layout from "../src/svg/3P.svg";
// // import Map from "./svg/layout.svg";
// import React from "react";
// import ThirdPart from "./svg/ThirdPart";
// // const SVGMap = React.lazy(() => import("../src/svg/3P.svg"));

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={layout} alt="logo" /> */}
//         <ThirdPart />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         {/* <Suspense fallback={""}>
//           <SVGMap />
//         </Suspense> */}
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
import Loader from "./Components/Loader";
import LoaderPage from "./Components/LoaderPage";
import { UserContext, UsercontextProvider } from "./context";
// import Layout from "./Components/Layout";
const Layout = lazy(() => import("./Components/Layout"));

const App = () => {
  // const socket = io();
  const { setData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const queryParameters = new URLSearchParams(window.location.search);
  const userid = queryParameters.get("userid");

  useEffect(() => {
    const ws = new WebSocket(`wss://192.236.161.98:8080/${userid}`);
    ws.addEventListener("open", () => {
      console.log("We are connected");
    });
    ws.onmessage = function (e) {
      var server_message = e.data;
      console.log(server_message);
      setData(JSON.parse(server_message));
      // document.getElementById("ph-value").innerHTML = server_message;
    };
  }, []);

  return (
    <>
      {loading && (
        <>
          <LoaderPage />
        </>
      )}
      <Suspense>
        <Layout setLoading={setLoading} loading={loading} />
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
