import "./App.css";
import layout from "../src/svg/3P.svg";
// import Map from "./svg/layout.svg";
import React from "react";
// const SVGMap = React.lazy(() => import("../src/svg/3P.svg"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={layout} alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Suspense fallback={""}>
          <SVGMap />
        </Suspense> */}
      </header>
    </div>
  );
}

export default App;
