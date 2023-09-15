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

import React, { Suspense, lazy, useEffect, useState } from "react";
import Loader from "./Components/Loader";
// import Layout from "./Components/Layout";
const Layout = lazy(() => import("./Components/Layout"));

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ flex: 1 }}>
      {loading && <Loader />}

      <Suspense>
        <Layout setLoading={setLoading} />
      </Suspense>
    </div>
  );
};

export default App;
